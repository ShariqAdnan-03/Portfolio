import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shariq Adnan",
    titles: [
      "Computer Science Student",
      "Data Scientist",
      "AI & ML Enthusiast"
    ],
    email: "shariqadnan111@gmail.com",
    location: "Bengaluru, India",
    github: "https://github.com/ShariqAdnan-03",
    linkedin: "https://www.linkedin.com/in/shariq-adnan/",
    bio: "I am a Computer Science student specializing in Business Systems, pivoting into the world of Data Science and AI. My academic foundation is built on rigorous CS principles, which I apply to solve real-world data problems. I bridge the gap between complex neural architectures and actionable business insights."
  },
  education: [
    {
      institution: "VIT Vellore",
      degree: "B.Tech in Computer Science & Business Systems",
      year: "2021 - 2025",
      score: "CGPA: 8.12/10"
    },
    {
      institution: "Narayana Jr College",
      degree: "Intermediate (Class 12)",
      year: "2019 - 2021",
      score: "Percentage: 89.2%"
    },
    {
      institution: "Wisewoods International",
      degree: "High School (Class 10)",
      year: "2018 - 2019",
      score: "CGPA: 10.0"
    }
  ],
  experience: [
    {
      role: "Data Science Intern",
      company: "Corizo",
      period: "Jun 2025 - Aug 2025",
      description: "Designed supervised machine learning classification models (Logistic Regression, Random Forest) improving forecasting accuracy by 10%. Processed and engineered features from 7,000+ customer records and achieved 89% prediction accuracy on held-out data through systematic hyperparameter tuning."
    }
  ],
  certifications: [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Oct 4, 2023",
      verifyLink: "https://drive.google.com/file/d/1a2xEuky0ytfZb5quDtQjK4cgfO4sil-n/view?usp=drive_link"
    },
    {
      name: "MERN Full Stack Internship",
      issuer: "Ethnus",
      date: "Dec 8, 2023",
      verifyLink: "https://drive.google.com/file/d/1ZqTLHqp4klXC0KFPlrjUHrcKjGrH-re9/view?usp=sharing"
    },
    {
      name: "Java DSA",
      issuer: "Udemy",
      date: "Sep 2, 2024",
      verifyLink: "https://drive.google.com/file/d/1nhjb_y6L5QC3EbHAVTj1iyKh2T1nF48H/view?usp=drive_link"
    }
  ],
  projects: [
    {
      title: "Heart Stroke Prediction",
      description: "Built an end-to-end prediction pipeline on ~5,000 patient records. Implemented Logistic Regression, SVM, Decision Tree, and KNN classifiers, achieving ~94% test accuracy.",
      tags: ["Python", "Pandas", "Scikit-Learn", "SVM", "KNN"],
      github: "https://github.com/ShariqAdnan-03/Heart-Stroke-Prediction"
    },
    {
      title: "Loan Approval Prediction",
      description: "Automated loan eligibility system on ~4,000+ applications. Utilized Decision Tree and Random Forest classifiers, achieving 91–98% accuracy on held-out data.",
      tags: ["Python", "Random Forest", "Decision Tree", "Matplotlib"],
      github: "https://github.com/ShariqAdnan-03/Loan-Approval-Prediction"
    },
    {
      title: "Car Price Prediction",
      description: "Built a regression model for used car prices on ~10,000 listings. Selected Random Forest as the best model based on MAE, MSE, and R² scores after extensive EDA.",
      tags: ["Python", "Random Forest", "EDA", "Regression"],
      github: "https://github.com/ShariqAdnan-03/Indian-Used-Car-Price-Prediction"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", proficiency: 90 },
        { name: "SQL", proficiency: 90 },
        { name: "Java", proficiency: 80 },
        { name: "C++", proficiency: 80 },
        { name: "JavaScript", proficiency: 70 }
      ]
    },
    {
      category: "Data Science & AI",
      items: [
        { name: "Pandas & NumPy", proficiency: 95 },
        { name: "Scikit-Learn", proficiency: 90 },
        { name: "TensorFlow", proficiency: 85 },
        { name: "PyTorch", proficiency: 80 },
        { name: "NLP (NLTK)", proficiency: 80 },
        { name: "Seaborn/Matplotlib", proficiency: 85 }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Jupyter Notebook", proficiency: 95 },
        { name: "Git/GitHub", proficiency: 88 },
        { name: "MySQL", proficiency: 85 },
        { name: "VS Code", proficiency: 90 },
        { name: "AWS Cloud", proficiency: 75 },
        { name: "Linux", proficiency: 70 }
      ]
    }
  ],
  blogs: [] // Leave empty to trigger "Coming Soon" state
};