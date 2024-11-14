import React from 'react';
import './profile.css';
import { Container, Stack, Grid } from '@mantine/core';

interface ProfileProps {
  name?: string;
  title?: string;
  description: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
    <div className={`rounded-lg shadow-lg bg-white p-6 ${className}`}>
    {children}
  </div>
)

const Profile: React.FC<ProfileProps> = ({ 
  name = "Your Name", 
  title = "Your Title", 
  description, 
  socialLinks 
}) => {
  return (
    <Container>
            <div>
            <img 
              className='photo'
                src="https://media.licdn.com/dms/image/v2/D4E03AQHEMOKtqKlj-g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730488318938?e=2147483647&v=beta&t=1_KjF9txXrv2Z3etblS6HpgI07FWMLrzpRCA3elPCig" 
                alt="profile photo" />
            </div>
            <div className="info">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="title">{name}</h1>
                  <p className="text-lg text-gray-500 dark:text-gray-400">{title}</p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>

                {socialLinks && (
                  <div>
                    {socialLinks.github && (
                      <button className='circle'><a 
                        href={socialLinks.github}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github"
                      >
                        GitHub
                      </a></button>
                    )}
                    {socialLinks.linkedin && (
                      <button className='circle'><a 
                        href={socialLinks.linkedin}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 ml-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          LinkedIn
                      </a></button>
                    )}
                    {socialLinks.email && (
                      <button className='circle'><a 
                        href={socialLinks.email}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 ml-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Email
                      </a></button>
                    )}
                  </div>
                )}

              </div>
            </div>
    </Container>
  );
};

export default Profile;