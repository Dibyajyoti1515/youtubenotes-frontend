import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5, bgcolor: 'transparent', color: 'black' }}>
      <Typography variant="h3" gutterBottom fontWeight="bold">
        Privacy Policy
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        <strong>Effective Date:</strong> May 13, 2025
      </Typography>

      <Typography paragraph>
        This Privacy Policy explains how we collect, use, and protect your data when you use our Chrome Extension and web platform. By using our services, you agree to the terms outlined in this policy.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          1. Information We Collect
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Email address, name, and Google ID (OAuth)" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Username and password (hashed securely)" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="YouTube video links and associated notes" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Folder names and structured note data" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Device and IP address (for security purposes)" />
          </ListItem>
        </List>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography paragraph>
          We use your data to:
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Authenticate users and manage secure logins" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Store and manage your YouTube notes and folders" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Personalize your user experience" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Improve and maintain our platform" />
          </ListItem>
        </List>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          3. Data Storage and Security
        </Typography>
        <Typography paragraph>
          Your data is stored in a PostgreSQL database hosted on a secure cloud platform (Railway). All passwords are securely hashed, and data transmission is protected via HTTPS/SSL.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          4. Third-Party Services
        </Typography>
        <Typography paragraph>
          We use Google OAuth for user authentication. We do not share your data with any third parties unless required by law.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          5. Cookies & Local Storage
        </Typography>
        <Typography paragraph>
          We use cookies and local storage for basic session management. No sensitive personal information is stored locally.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          6. Your Rights
        </Typography>
        <Typography paragraph>
          You may request to view, edit, or delete your personal data at any time. Contact us at the email below.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          7. Changes to This Policy
        </Typography>
        <Typography paragraph>
          We may update this policy from time to time. Changes will be posted on this page with a new effective date.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          8. Contact Us
        </Typography>
        <Typography>
          For any questions or concerns, please contact us at: <br />
          <Box>
            <strong>Email:</strong> 
            <Typography sx={{ backgroundColor: 'white', display: 'inline-block'}}> &nbsp;..&nbsp;</Typography>
          </Box>
          <br />
          <Box>
            <strong>Contact-Number:</strong> 
            <Typography sx={{ backgroundColor: 'white', display: 'inline-block'}}> &nbsp;+91 9337168486&nbsp;</Typography>
          </Box>
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
