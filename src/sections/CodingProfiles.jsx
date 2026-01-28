import React, { useState, useEffect } from 'react';
import { FiGithub, FiCode, FiUsers, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { githubConfig, leetcodeConfig, personalInfo } from '../data/portfolio';
import '../styles/CodingProfiles.css';

const CodingProfiles = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [githubLoading, setGithubLoading] = useState(true);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [githubError, setGithubError] = useState(null);
  const [leetcodeError, setLeetcodeError] = useState(null);

  // Fetch GitHub Data
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setGithubLoading(true);
        const response = await fetch(`${githubConfig.apiUrl}${githubConfig.username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        
        const data = await response.json();
        setGithubData({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          profileUrl: data.html_url
        });
        setGithubError(null);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setGithubError('Unable to load GitHub data. Please try again later.');
        // Fallback data for demo
        setGithubData({
          username: githubConfig.username,
          repos: 42,
          followers: 128,
          following: 95,
          profileUrl: personalInfo.github
        });
      } finally {
        setGithubLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Fetch LeetCode Data
  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        setLeetcodeLoading(true);
        
        // LeetCode GraphQL query
        const query = `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `;

        const response = await fetch('/api/leetcode/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: query,
            variables: { username: leetcodeConfig.username }
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode data');
        }

        const result = await response.json();
        
        if (result.data && result.data.matchedUser) {
          const submissions = result.data.matchedUser.submitStats.acSubmissionNum;
          const easyCount = submissions.find(s => s.difficulty === 'Easy')?.count || 0;
          const mediumCount = submissions.find(s => s.difficulty === 'Medium')?.count || 0;
          const hardCount = submissions.find(s => s.difficulty === 'Hard')?.count || 0;
          const totalSolved = easyCount + mediumCount + hardCount;

          setLeetcodeData({
            username: result.data.matchedUser.username,
            totalSolved,
            easy: easyCount,
            medium: mediumCount,
            hard: hardCount,
            profileUrl: `https://leetcode.com/${leetcodeConfig.username}`
          });
          setLeetcodeError(null);
        } else {
          throw new Error('Invalid response from LeetCode API');
        }
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        setLeetcodeError('Unable to load LeetCode data. This may be due to CORS restrictions.');
        // Fallback data for demo
        setLeetcodeData({
          username: leetcodeConfig.username,
          totalSolved: 325,
          easy: 145,
          medium: 135,
          hard: 45,
          profileUrl: personalInfo.leetcode
        });
      } finally {
        setLeetcodeLoading(false);
      }
    };

    fetchLeetcodeData();
  }, []);

  return (
    <section id="coding-profiles" className="section coding-profiles-section">
      <div className="container">
        <h2 className="section-title">Coding Profiles</h2>
        <p className="section-subtitle">
          My activity and statistics across coding platforms
        </p>

        <div className="profiles-grid">
          {/* GitHub Profile Card */}
          <div className="profile-card card fade-in">
            <div className="profile-header">
              <div className="profile-icon github-icon">
                <FiGithub size={28} />
              </div>
              <div className="profile-title-section">
                <h3 className="profile-title">GitHub</h3>
                <p className="profile-subtitle">Code Repository</p>
              </div>
            </div>

            {githubLoading ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading GitHub data...</p>
              </div>
            ) : githubError ? (
              <div className="error-state">
                <p className="error-message">{githubError}</p>
                <p className="fallback-note">Showing demo data</p>
              </div>
            ) : null}

            {githubData && !githubLoading && (
              <>
                <div className="profile-stats">
                  <div className="stat-item">
                    <FiBookOpen className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-value">{githubData.repos}</div>
                      <div className="stat-label">Repositories</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FiUsers className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-value">{githubData.followers}</div>
                      <div className="stat-label">Followers</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FiUsers className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-value">{githubData.following}</div>
                      <div className="stat-label">Following</div>
                    </div>
                  </div>
                </div>

                <a
                  href={githubData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link btn btn-primary"
                >
                  <FiGithub />
                  View GitHub Profile
                </a>
              </>
            )}
          </div>

          {/* LeetCode Profile Card */}
          <div className="profile-card card fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="profile-header">
              <div className="profile-icon leetcode-icon">
                <SiLeetcode size={28} />
              </div>
              <div className="profile-title-section">
                <h3 className="profile-title">LeetCode</h3>
                <p className="profile-subtitle">Problem Solving</p>
              </div>
            </div>

            {leetcodeLoading ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading LeetCode data...</p>
              </div>
            ) : leetcodeError ? (
              <div className="error-state">
                <p className="error-message">{leetcodeError}</p>
                <p className="fallback-note">Showing demo data</p>
              </div>
            ) : null}

            {leetcodeData && !leetcodeLoading && (
              <>
                <div className="leetcode-total">
                  <FiCheckCircle className="total-icon" />
                  <div>
                    <div className="total-value">{leetcodeData.totalSolved}</div>
                    <div className="total-label">Problems Solved</div>
                  </div>
                </div>

                <div className="leetcode-breakdown">
                  <div className="difficulty-item easy">
                    <div className="difficulty-header">
                      <span className="difficulty-label">Easy</span>
                      <span className="difficulty-count">{leetcodeData.easy}</span>
                    </div>
                    <div className="difficulty-bar">
                      <div 
                        className="difficulty-fill" 
                        style={{ width: `${(leetcodeData.easy / leetcodeData.totalSolved) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="difficulty-item medium">
                    <div className="difficulty-header">
                      <span className="difficulty-label">Medium</span>
                      <span className="difficulty-count">{leetcodeData.medium}</span>
                    </div>
                    <div className="difficulty-bar">
                      <div 
                        className="difficulty-fill" 
                        style={{ width: `${(leetcodeData.medium / leetcodeData.totalSolved) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="difficulty-item hard">
                    <div className="difficulty-header">
                      <span className="difficulty-label">Hard</span>
                      <span className="difficulty-count">{leetcodeData.hard}</span>
                    </div>
                    <div className="difficulty-bar">
                      <div 
                        className="difficulty-fill" 
                        style={{ width: `${(leetcodeData.hard / leetcodeData.totalSolved) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <a
                  href={leetcodeData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link btn btn-primary"
                >
                  <SiLeetcode />
                  View LeetCode Profile
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
