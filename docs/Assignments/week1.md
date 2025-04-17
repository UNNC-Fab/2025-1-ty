# Week 1 --- Project Management
This week, I focused on completing three key tasks: Prepare (Install and Configure GitHub account), Set up a personal website (using VitePress), and outlining my final project plan.

## 1. Prepare (Install and Configure GitHub account)
1.1 To create our webpage, we will utilize the following tools(Click the tool name to download and install):

• [Git](https://git-scm.com/downloads): Manages version control in GitLab. 

• [GitHub](https://github.com/): Serves as the hosting platform for our webpage.

• [GitHub Desktop](https://desktop.github.com/): Simplifies the process of transferring code from a local environment to GitHub.

• [Node.js](https://nodejs.org/en/): Establishes the necessary development environment.

• [Trea AI](https://www.trae.ai/): Assists in drafting and organizing documentation.


• Image Upload Service: We employ [Picgo](https://picgo.github.io/PicGo-Doc/zh/guide/) to store images on cloud platforms (e.g., [GitLab](https://gitlab.com/users/sign_in)) and embed them into Markdown documents.

1.2 Web page setting: 
 In GitHub, create a repository with public visibility. Navigate to the ​Settings tab, select ​Pages, and choose the ​**main** branch with the **/(root)** folder option. Click ​Save to generate your webpage link.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250320174915313.png)

1.3 Git basic operations
**Configure Git**

When configuring Git, you need to set the username and email address. Run the following commands to set them:

```bash
git config --global user.name "sytt198"
git config --global user.email "19883030451@163.com"
```

The following table lists the commands for creating a repository in Git:

```bash
git init    # Initializes a repository
git clone   # Copies a remote repository, essentially downloading a project

```
Clone and push the github folder to the local after typing in the terminal.

```bash
git add --all
git commit -m "Add new feature"
git push origin main
```

## 2. Set up a personal website (using VitePress)
2.1 Follow the instraction on [ VitPress](https://vitepress.dev/zh/guide/getting-started) website. Initialize with your preferred package manager.

• Install Node.js First, you need to install Node.js. Visit the official Node.js website to download and install the latest stable version. Here, I installed version 22.13. After installation, add the bin directory to the environment variables.You can click here to get the installation guidance

• clone repository Clone the project locally: Use the git clone command to clone the remote project locally.
```bash
git clone https://github.com/sytt198/2025-1-ty.git
```

2.2 Populate content: VitePress configures the site's basic information through docs/.vitepress/config.ts, including title, description, theme, plugins, navigation bar, sidebar, etc.

The details of the config.mts file are as follows:
```bash
import { defineConfig } from 'vitepress'
Populate content: VitePress configures the site's basic information through docs/.vitepress/config.ts, including title, description, theme, plugins, navigation bar, sidebar, etc.
```bash
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/2025-1-ty/',
  title: "FabLab-NB 2025",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/About/about' },
      { text: 'Assignments', link: '/assignments/week1' },
      { text: 'Project', link: '/project' }
    ],

    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Home page', link: '/' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About me', link: '/about/about' },
      
          { text: 'Student agreement', link: '/about/studentagreement' }
        ]
      },
      {
        text: 'Assignments',
        items: Array.from({ length: 18 }, (_, i) => ({
          text: `Week ${i + 1}`,
          link: `/assignments/week${i + 1}`
        }))
      },
      {
        text: 'Project',
        items: [
          { text: 'Final project', link: '/project/final-project' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

```
add logo:
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417160923873.png)
```
head: [
  
    ['link', { rel: 'icon', href: 'https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/favicon.png' }]
  ],
```
The details of the index.md file are as follows:
```
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Welcome to"
  text: "Yishan's Project !"
  tagline: This is my documentation for the Fab Academy 2025.
  actions:
    - theme: brand
      text: Start
      link: /about/landingpage
    - theme: alt
      text: View on GitHub

      link: https://github.com/UNNC-Fab/2025-1-ty


features:
  - title: Copyright 2025 Yishan Tong - Creative Commons Attribution Non Commercial
    details: This webpage is powered by [VitePress](https://vitepress.vuejs.org/)

```  
2.3 After you build the document, you can use this script to start a local development server with instant hot updates. Run it with the following command:
```bash
$ npm run docs:dev
```
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/image%2025.png)

Use Git to commit and push changes Use Git to commit and push changes to the remote repository on GitHub:
```bash
git add --all    # Add all changes
git commit -m "v1"    # Commit changes
git push origin main   # Push changes to GitLab
```