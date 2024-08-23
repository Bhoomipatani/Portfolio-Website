// import fileFlow from '/public/image/file-flow.jpg';
// import gptConnect from '/public/image/gpt-connect.jpg';
// import portfolioPro from '/public/image/portfolio-pro.jpg';
// import covidGuard from '/public/image/covid-guard.jpg';
// import assetManager from '/public/image/asset-manager.jpg'; // Placeholder for Asset Manager project
// import deepLearningModel from '/public/image/deep-learning-model.jpg'; // Placeholder for Deep Learning Model project

export const projects = [
    {
        id: 1,
        name: 'File Flow',
        description: "Developed a serverless file-sharing application that ensures robust security and scalability. Utilized AWS Lambda for backend processing, S3 for file storage, and DynamoDB for data management. Implemented Multi-Factor Authentication (MFA) for secure user access. Designed the frontend with React.js, styled using Tailwind CSS for a modern look, and integrated AWS API Gateway to manage API requests.",
        tools: "AWS Lambda, S3, DynamoDB, React.js, Tailwind CSS, AWS API Gateway, MFA, Python",
        // image: fileFlow,
    },
    {
        id: 2,
        name: 'GPT Connect',
        description: "Created a React-based application integrating multiple GPT models, including Meta AI and Gemini, to offer diverse AI responses. Enabled chat functionality with features for importing and exporting chat histories in JSON format and downloading conversations as PDFs. Utilized Firestore for data storage and implemented dynamic UI components with React.js and Tailwind CSS to enhance user experience and interface design.",
        tools: "React.js, Firestore, JSON, PDF, Meta AI, Gemini, Tailwind CSS, JavaScript, Node.js",
        // image: gptConnect,
    },
    {
        id: 3,
        name: 'Portfolio Pro',
        description: "Developed an interactive portfolio website to display projects, skills, and work experience. Built with React.js for dynamic content rendering and styled with Tailwind CSS for a responsive and modern design. Focused on optimizing site performance for fast loading times and seamless navigation. Incorporated responsive design principles to ensure compatibility across different devices and screen sizes.",
        tools: "React.js, Tailwind CSS, HTML, CSS, JavaScript, Responsive Design",
        // image: portfolioPro,
    },
    {
        id: 4,
        name: 'Covid Guard',
        description: "Engineered a deep learning model using YOLOv3 and Caffe for real-time detection of social distancing and face mask compliance. Achieved 88.8% accuracy, significantly contributing to public health safety measures. Employed Python for model development and integration, and utilized image processing techniques to ensure effective compliance monitoring.",
        tools: "YOLOv3, Caffe, Python, Deep Learning, Image Processing, OpenCV",
        // image: covidGuard,
    },
    {
        id: 5,
        name: 'Asset Manager',
        description: "Developed a comprehensive React Single Page Application (SPA) for asset management and will preparation. Enhanced user and admin interfaces with responsive HTML and Tailwind CSS. Implemented secure authentication using OAuth2.0, ensuring robust access control and data protection. Focused on creating a user-friendly experience while managing and organizing assets efficiently.",
        tools: "React, Tailwind CSS, HTML, JavaScript, OAuth2.0, Node.js, Express.js, MongoDB",
        // image: assetManager,
    },
];
