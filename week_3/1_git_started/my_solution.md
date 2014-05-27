## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


Define:

add- adds a file to the git area to be traced

*type: git add <file> (for all files type: '*.<filetype>')

branch- this is a copy of the master where you can make edits without touching the original file

checkout- this brings files back to their status before the last commit. You can also use it to switch branches but typing 

*type: git checkout <branch>

clone- this allows you to copy someone elses file so you can work on it without disrupting their code

*type: git clone <url>

commit- commits files in that are being traced and have been 		 modified
type: git commit -m "commit note"

fetch- this pulls any changes to remote files and merges them with your local files 

log- shows you the most recent commits you've done with the 	 commit comments
*type: git log

merge- this is done when a branch is where you want it to be. Then you merge it with the master when ready. 

*type: git merge <branch-name>

pull- this takes changes made to the file on github and syncs it with your local file 

*type: git pull <remote> <branch-name>

push- tells Git where to put our commits (robschwartz.github.io)
to start-
*type: git remote add origin <site address>

*type: git push -u <remote><branch-name>

reset- takes all files out of the staging area and clears it

*type: git reset <file>

rm- this removes any files you dont want
*type: git rm <file> 

status- shows the files that are ready to be committed

*type: git status


## Release 4: Git Workflow

- Push files to a remote repository
*type: git push -u <remote><branch-name>
- Fetch changes
*type: git fetch <remote>
- Commit locally
*type: git commit -m "commit note"

## Release 5: Reflection

My biggest issue with this challange has been seeing my commits live on the github site. Everything in the terminal makes it seem like the commit goes through but I just don't see it live. Honestly, the git app was a lot easier to use and I don't understand why we can't use it professionally. It's like using a flint and a rock to light a fire when we have matches in our hands. I have figured it out, but I like the app much better. It's quicker and easier to use. 