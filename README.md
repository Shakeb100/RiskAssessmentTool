# NLNB Risk Assessment Tool 🏦 ⚠️

Designed to be a question-based diagnostic tool, built using TypeScript and Next.js, the NLNB Risk Assessment Tool helps banks identify and assess IT risks across the organization.

The tool is intended to be a questionnaire with 25-35 questions that will be answered by the client. Based on their responses, the tool will develop a risk rating, calculate residual risk, and provide recommendations to the bank based on your analysis. Additionally, the tool will automatically calculate the impact of disruptions across critical functions

### Created for Penn State's IST 302 Project Management course 🐾

## How does it work?

The bank selects a number of questions based on the the tool's criteria based questions

- If the number of selected questions is greater than 75% of the total number of questions, the assessment score is "Critical" ⚠️
- If the number of selected questions is greater than 50% the assessment score is "High Risk" 🔴
- If the number of selected questions is up to 25% the assessment score is "Moderate Risk" 🟠
- If the number of selected questions is less than 25% of the total number of questions, the assessment score is "Low Risk" 🟢


