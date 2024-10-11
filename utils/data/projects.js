export const projects = [
    {
      id: 1,
      name: 'File Flow',
      summary: "Streamlined file sharing with secure user authentication and scalable serverless architecture on AWS.",
      description: `
        <p class="mb-4">File Flow is a robust file-sharing application built with AWS Lambda, API Gateway, and S3 to ensure secure data handling and easy scalability.</p>
        <p class="font-bold mb-2 text-pink">Key Features:</p>
        <ul class="list-disc list-inside space-y-4 text-gray-300">
          <li><span class=" text-green">Serverless Architecture:</span> Designed AWS Lambda functions in Python to streamline user registration, login, and image metadata management.</li>
          <li><span class=" text-green">Secure Storage:</span> Used S3 for storing images securely, leveraging AWS's high-availability storage solutions.</li>
          <li><span class=" text-green">Multi-Factor Authentication:</span> Integrated MFA with AWS Cognito for robust authentication and secure user access.</li>
          <li><span class=" text-green">Modern Frontend:</span> Built the user interface with React and styled with Tailwind CSS, providing a responsive and intuitive user experience.</li>
        </ul>
        <p class="mt-4"><strong>Outcome:</strong> Ensured seamless, secure file sharing with high performance and user trust.</p>
      `,
      tools: "AWS Lambda, API Gateway, S3, Cognito, DynamoDB, React, Tailwind CSS, Python",
      image: '/image/fileflow.png',
    },
    {
      id: 2,
      name: 'GPT Connect',
      summary: "AI-powered chat application integrating multiple GPT models for diverse conversational responses.",
      description: `
        <p class="mb-4">GPT Connect is an AI-powered chat application that integrates Meta AI and Gemini models to provide users with a unified, multi-model chat experience.</p>
        <p class="font-semibold mb-2 text-pink">Features:</p>
        <ul class="list-disc list-inside space-y-4 text-gray-300">
          <li><span class=" text-green">Multi-Model Integration:</span> Combined Meta AI and Gemini APIs in one app, allowing users to interact with multiple AI models in a single prompt.</li>
          <li><span class=" text-green">Data Storage and Export:</span> Facilitates conversation tracking by storing interactions in Firestore, with options to export chats as JSON or download them as PDFs.</li>
          <li><span class=" text-green">Responsive UI:</span> Developed with React and Tailwind CSS for a dynamic, user-friendly interface.</li>
        </ul>
        <p class="mt-4"><strong>Outcome:</strong> Enhanced user experience with flexible AI responses and easy chat history management.</p>
      `,
      tools: "Meta AI API, Gemini API, Firestore, React, Tailwind CSS",
      image: '/image/gptconnect.png',
    },
    {
      id: 3,
      name: 'Covid Guard',
      summary: "AI-driven solution for mask detection and social distancing compliance, contributing to public health safety.",
      description: `
        <p class="mb-4">Covid Guard combines deep learning with computer vision to monitor mask usage and social distancing in real-time, helping enforce public health measures.</p>
        <p class="font-semibold mb-2 text-pink">Achievements:</p>
        <ul class="list-disc list-inside space-y-4 text-gray-300">
          <li><span class=" text-green">High-Accuracy Mask Detection:</span> Developed a face mask detection algorithm using Caffe, Keras, OpenCV, and TensorFlow, achieving 88.8% accuracy on a dataset of 3,800 images.</li>
          <li><span class=" text-green">Social Distancing Monitoring:</span> Designed an algorithm using YOLOv3 and the Coco dataset to detect pedestrian spacing, issuing alerts for violations in real-time.</li>
          <li><span class=" text-green">Recognition:</span> Represented at Avishkar 2022 State Level Competition, securing a top 10 position and publishing a research paper.</li>
        </ul>
        <p class="mt-4"><strong>Outcome:</strong> Successfully deployed a monitoring solution that improved compliance with health protocols during the pandemic.</p>
      `,
      tools: "OpenCV, Keras, TensorFlow, YOLOv3, Caffe",
      image: '/image/covidguard.png',
    },
  ];
  
