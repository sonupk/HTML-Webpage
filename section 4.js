//Section 4: Version Control

// Imagine you are working on a collaborative project. Describe how you would use Git for version
// control, including creating branches, committing changes, merging branches, and resolving conflicts.
  
//Answer=>

// 1.Setup and Initialization:

// Create a new repository on a platform like GitHub.
// Clone the remote repository to your local machine using the git clone command.
// Arrange your Git identity using git config with your name and email.

//2. Branching:

// Before making changes,create a new branch using git checkout -b <branch-name>. 
// Make sure to you choose detailed branch names for doing work.

//3.Committing Changes:

// Make your changes to the code in your branch.
// Use git status to see which files have been modified.
// Stage your changes using git add <file> for one file or git add. for add all files.
// Commit changes with a detailed commit message using git commit -m "message here".

//4. Pushing Changes:

// Push your branch to the remote repository using git push origin <branch-name>.

//5. Pull Request:

// On the remote repository eg,github,create a Pull Request from your branch to the main branch.

//6. Merging:

// After your pull request has been reviewed and approved, merge it into the main branch.
//using git merge or git pull origin main.

//7.Conflicts:

// If multiple people make changes to the same part of a file, Git may detect a conflict.

//8. Update the Local Repo:

// Periodically, update your local repository with changes from the main branch using git pull origin main. 

//9.Deleting Branches:

// After your branch is no longer needed, you can delete it locally using git branch -d <branch-name> 
//and remotely using git push origin --delete <branch-name>.


// Continue the cycle of creating branches, making changes, and creating Pull requests.

