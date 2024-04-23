# CHWDCK PROJECT REPO GUIDE

**Welcome to the project repository! This guide outlines the workflow and best practices for collaborating on the Chwdck project.**

PS: Right click on this file in the primary side bar, locate open preview to preview this ChwdckProject.README.md file

## Workflow Overview:

1. **Main Branch:** Represents the current stable state of the project.

2. **_setup Branch:**
   - This is the primary working branch.
   - All team members branch out from here to work on individual tasks.

3. **Testing Branch:**
   - Used for pull requests and code reviews.
   - Ensures the quality and integrity of the codebase before merging.

4. **Staging Branch:**
   - Final checks and testing occur here.
   - Once approved, changes are merged into the main branch.

## Getting Started:

1. **Checkout to _setup Branch:**
   - git checkout _setup

2. **Folder Structure:**
   - Familiarize yourself with the project's folder structure.
   - Locate your working directory within the src folder.

3. **Create Personal Branch:**
   - Branch out from _setup to create your personal working branch.
   - Use your name as part of the branch name (e.g., `git checkout -b frank_setup`).

4. **Committing Changes:**
   - Stage changes using `git add` and commit them regularly.
   - Avoid pushing directly to _setup branch; instead, push to your personal branch.

5. **Directory Overview:**
   - **pages:** Contains website pages. Organize pages in folders (e.g., `Pages > vendor > Vendor.jsx`).
   - **assets:** Store images, SVGs, videos, and other assets here.
   - **container:** Houses the container component with the shared navbar and footer.
   - **components:** Additional components for pages reside here.
   - **shared:** Includes shared components like the Navbar and Footer.

6. **Finalizing Updates:**
   - After completing the Navbar and Footer, I'll notify the team to make a pull request to update the _setup branch and then update our individual branches accordingly.

7. **Pull Request:**
   - Once your work is complete, initiate a pull request to merge changes into the testing branch.
   - Ensure to incorporate the container component to wrap pages before initiating the pull request.

PS: Notice how I create a folder for my own part, e.g., vendor:
   - `pages > vendor > vendor.js`
   - `components > vendor > Card.js, Button.js, etc.`
   - `assets > vendor > vendor.svg, vendorImage/, etc.`

**By following this workflow, we can maintain a structured and efficient development process for the Chwdck project. If you have any questions or encounter any issues, don't hesitate to reach out to the team for assistance. Happy coding! 🚀**
