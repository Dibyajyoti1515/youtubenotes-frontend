import React from 'react';
import { Container, Typography, Box, Card, CardContent, Divider } from '@mui/material';

export default function ChromeExtension() {
    const steps = [
        {
            title: "1. Download Extension Files",
            description: `Go to the Google Drive link below and download or clone the folder containing your Chrome extension files.`,
            link: "https://drive.google.com/drive/folders/1TZcRbl6TI8JFa7wyqkY_g6ANcyBwTGkO",
            imageAlt: "Google Drive folder view",
        },
        {
            title: "2. Extract the Files (If Zipped)",
            description: `If your extension files are in a .zip or .crx format, extract them using a tool like WinRAR, 7-Zip, or the system unzip utility.`,
            imageAlt: "Unzipping the extension files",
        },
        {
            title: "3. Open Extensions Page in Chrome",
            description: `Open Google Chrome and go to the following URL: chrome://extensions/.`,
            imageAlt: "Chrome extensions page",
        },
        {
            title: "4. Enable Developer Mode",
            description: `In the top-right corner of the Extensions page, toggle the 'Developer mode' switch.`,
            imageAlt: "Enable Developer mode in Chrome",
        },
        {
            title: "5. Load the Unpacked Extension",
            description: `Click the 'Load unpacked' button and select the folder containing your extension files (the one with manifest.json).`,
            imageAlt: "Load unpacked button in Chrome",
        },
        {
            title: "6. Done!",
            description: `Your extension should now be installed and visible in Chrome. If there are issues, check the console logs or make sure your manifest.json is correctly set up.`,
            imageAlt: "Extension installed successfully",
        },
    ];

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h3" gutterBottom sx={{color: '#4A148C'}}>
                🧩 Chrome Extension Setup Guide
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                A complete step-by-step walkthrough to install your custom Chrome extension using the &quot;Load unpacked&quot; method.
            </Typography>

            <Box
        sx={{
            my: 3,
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: 3,
        }}
    >
        <iframe
    src="https://www.youtube.com/embed/9V0CoPgoW9A"
    title="Chrome Extension Setup Tutorial"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }}
/>

    </Box>

            <Divider sx={{ my: 3 }} />

            {steps.map((step, index) => (
                <Card key={index} sx={{ mb: 4, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {step.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {step.description}
                        </Typography>

                        {step.link && (
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                🔗 <a href={step.link} target="_blank" rel="noopener noreferrer">
                                    Open Google Drive
                                </a>
                            </Typography>
                        )}

                        {/* Placeholder for image */}
                        <Box
                            sx={{
                                mt: 2,
                                height: 200,
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 2,
                                border: '1px dashed #ccc',
                            }}
                        >
                            <Typography variant="caption" color="text.secondary">
                                [Insert image: {step.imageAlt}]
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            ))}

            <Typography variant="body2" color="text.secondary" align="center">
                If you face any issues, make sure your extension folder includes a valid <strong>manifest.json</strong> and no missing files.
            </Typography>
        </Container>
    );
}
