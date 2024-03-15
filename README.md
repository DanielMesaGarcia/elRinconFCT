# Hobbify

An app that enables you to find new hobbies and make friends!

## About

This is a project made by students from Iceland, Denmark, Senegal, and Gran Canaria. We wanted to focus on the UN's sustabinability goal number three; Ensure healthy lives and promote well-being for all at all ages.

### Relevant links
Figma: https://www.figma.com/file/S1iQKclFDri6WR3sAjn5e1/Design-Sprint?type=design&node-id=0%3A1&mode=design&t=qmbN7sXIwYrpN3Hq-1

FigJam: https://www.figma.com/file/SiK8SsnJWZEVbPrs6dXGJY/Design-Sprint?type=whiteboard&node-id=0%3A1&t=PYQewWzxvddR60nN-1

GitHub Projects: https://github.com/users/DanielMesaGarcia/projects/3/views/1

Presentation: https://www.figma.com/file/6uHtQNYF3MGwJp39WdVTi4/Presentation?type=design&node-id=0%3A1&mode=design&t=WeGnNRvQhQvjZkB0-1

Vercel deployment: https://el-rincon-71lm6e8ew-daniwlmesa12s-projects.vercel.app

## Local installation (if needed)

```git clone https://github.com/DanielMesaGarcia/elRinconFCT.git```

```cd elRinconFCT/```

```npm install```

The application uses our supabase cloud database by default, if the user wants to use their own database, create a .env file such as this one

```
REACT_APP_SUPABASE_URL= URL
REACT_APP_SUPABASE_ANON_KEY= KEY
```

Do keep in mind doing this will not import the tables or triggers in supabase, and I can't seem to find any way to export my supabase project
to use as a template. If someone were to need access to this code or these tables, or want their personal email to be deleted out of the 
database, please contact me at daniwlmesa12@gmail.com and I will handle it as soon as possible. Sorry for the inconvenience.
