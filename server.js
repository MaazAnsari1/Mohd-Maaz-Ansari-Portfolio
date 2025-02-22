const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express(); // Ensure app is defined here

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (frontend React app)
app.use(express.static(path.join(__dirname, '../build')));

// Ensure the directory for storing form data exists
const saveDirectory = path.join(__dirname, 'form-data');
console.log(`Expected directory path: ${saveDirectory}`); // Debugging log
if (!fs.existsSync(saveDirectory)) {
    fs.mkdirSync(saveDirectory, { recursive: true });
    console.log(`Directory created: ${saveDirectory}`);
} else {
    console.log(`Directory exists: ${saveDirectory}`);
}

// Ensure the hire-me.json file exists
const filePath = path.join(saveDirectory, 'hire-me.json');
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]'); // Initialize with an empty array
    console.log(`File created: ${filePath}`);
} else {
    console.log(`File already exists: ${filePath}`);
}

// Generate a unique employer number
const generateEmployerNumber = () => {
    const timestamp = Date.now(); // Use current timestamp for uniqueness
    return `EMP-${timestamp}`; // Unique employer number
};

// API route to handle form submission
app.post('/server', (req, res) => {
    console.log('POST /server called');
    console.log('Request body:', req.body);

    const formData = req.body;

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.phoneNum || !formData.message) {
        console.error('Invalid form data:', formData);
        return res.status(400).send('Invalid form data');
    }

    // Generate unique employer number
    const employerNumber = generateEmployerNumber();
    const formattedData = {
        "employer no": employerNumber,
        "full-name": formData.fullName,
        "email": formData.email,
        "phone-num": formData.phoneNum,
        "message": formData.message
    };

    console.log(`File path: ${filePath}`);

    // Read existing data from the file (if any)
    fs.readFile(filePath, 'utf8', (readErr, data) => {
        let existingData = [];

        if (readErr) {
            if (readErr.code === 'ENOENT') {
                console.log('No existing file found, creating a new one.');
            } else {
                console.error('Error reading existing file:', readErr);
                return res.status(500).send('Error reading existing data');
            }
        } else {
            try {
                existingData = JSON.parse(data);
            } catch (parseErr) {
                console.error('Error parsing existing file:', parseErr);
                existingData = []; // Reset to empty array on parsing error
            }
        }

        // Add new form data to the existing data
        existingData.push(formattedData);
        console.log('Updated existing data:', JSON.stringify(existingData, null, 2));

        // Save the updated data to the file
        fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (writeErr) => {
            if (writeErr) {
                console.error('Error writing to file:', writeErr);
                return res.status(500).send('Error saving form data');
            } else {
                console.log('Form data saved successfully:', JSON.stringify(existingData, null, 2));
                return res.status(200).send('Form data saved successfully');
            }
        });
    });
});

// API route to view the form data
app.get('/view-hire-me', (req, res) => {
    console.log('GET /view-hire-me called');
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('File does not exist:', err);
            return res.status(200).json([]); // Return empty array if file doesn't exist
        }

        // If the file exists, read it
        fs.readFile(filePath, 'utf8', (readErr, data) => {
            if (readErr) {
                console.error('Error reading file:', readErr);
                return res.status(500).send('Error reading file');
            }

            // Handle case where the file is empty
            if (!data) {
                console.log('File is empty.');
                return res.status(200).json([]); // Return empty array if file is empty
            }

            try {
                const parsedData = JSON.parse(data);
                console.log('File read successfully:', parsedData);
                return res.status(200).json(parsedData); // Send the data back as a JSON response
            } catch (parseErr) {
                console.error('Error parsing file:', parseErr);
                return res.status(500).send('Error parsing file data');
            }
        });
    });
});

// API route to test the server
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Route to handle root URL (for testing)
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

// Set the port and start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
