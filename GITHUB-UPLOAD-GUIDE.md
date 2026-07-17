# Upload Fiesta Party Hire Yeppoon to GitHub

This folder is the GitHub-ready website. Its `index.html` file is already at the repository root.

Important: upload the contents of this folder. Do not upload the large original ZIP file, and do not put a ZIP inside the repository.

## Recommended: GitHub Desktop

This is the easiest option and avoids the browser uploader's file-count limit.

1. Install and open [GitHub Desktop](https://desktop.github.com/), then sign in.
2. Choose **File → Add Local Repository**.
3. Select the `fiesta-party-hire-yeppoon-github-ready` folder.
4. If GitHub Desktop says it is not a repository, choose **Create a Repository** and keep this folder as the local path.
5. Enter `Initial Fiesta website` in the summary box and choose **Commit to main**.
6. Choose **Publish repository**.
7. Select whether the repository should be private or public, then confirm **Publish Repository**.

## Browser upload

GitHub's browser uploader accepts no more than 100 files at once and limits each file to 25 MiB. This website contains more than 100 files, so GitHub Desktop is easier.

If you still want to use the browser:

1. Create an empty repository on GitHub. Do not add a starter README, licence, or `.gitignore` during creation.
2. Open the repository and choose **Add file → Upload files**.
3. Open this GitHub-ready folder on your computer.
4. Upload the root files first, including `index.html`, `styles.css`, `script.js`, `planner.js`, `.nojekyll`, and the documentation files.
5. Upload the `assets` subfolders in manageable batches. Keep their folder names and structure exactly the same.
6. Commit each batch before uploading the next one.
7. Confirm that `index.html` appears on the repository's main page, not inside an extra outer folder.

## Git command-line option

Open a terminal inside this GitHub-ready folder and run:

```text
git init
git add .
git commit -m "Initial Fiesta website"
git branch -M main
git remote add origin YOUR-GITHUB-REPOSITORY-URL
git push -u origin main
```

Replace `YOUR-GITHUB-REPOSITORY-URL` with the HTTPS URL from your own empty GitHub repository. Do not copy a URL from somebody else's repository.

## Turn on GitHub Pages

1. Open the repository on GitHub.
2. Choose **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder.
5. Choose **Save**.
6. Wait a few minutes, then return to the Pages settings to find the published website address.

The website uses relative links and includes `.nojekyll`, so it is ready for a normal GitHub Pages project site.

## Before publishing

- Keep the filename spelling and letter case unchanged.
- Do not rename the `assets` folder.
- Do not delete the WebP files; they are the optimized event photos used by the website.
- Do not add the original 297 MB ZIP or the original uncompressed PNG collection.

