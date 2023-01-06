User.destroy_all
Resume.destroy_all
ResumeProject.destroy_all
Project.destroy_all

puts "🌱 Seeding users..."
u1 = User.create(
    name: "Nathan Foss",
    username: "DosLlamas",
    password: "this!is!SPARTA!123",
    email: "nathanfoss.dev@gmail.com",
    about: "Nathan is adept and career driven in Backend Design. His ability to effectively communicate and in technical documentation is due to his background in the Pharmaceutical Industry, where he worked with large collaborative teams, achieving organizational goals for patients, nurses and doctors’ needs.",
    image_url: nil
)
u2 = User.create(
    name: "JaQuan Banks",
    username: "Shadic8682",
    password: "password",
    email: "JaQuanBanks@gmail.com",
    about: "Wheelchair Passenger Agent was my first ever full-time job. While some may argue that it's just grunt work and pushing people around in chairs, I developed many skills working here that I will take to future positions.",
    image_url: nil
)
u3 = User.create(
    name: "Khanya Keswa",
    username: "khanyakeswa",
    password: "password",
    email: "khanya.keswa@gmail.com",
    about: "I'm an aspiring Software Engineer that values creating impactful, resonant human experiences. I was born in the Happy Valley, PA, grew up in Johannesburg, South Africa, and finished high school in the suburban Philadelphia area. Design as an influence has been a driving presence in my career, and I hope to carry that intent forward into future engineering roles. A unique aspect of myself is my ability to empathize with one's thoughts and ambitions, and pursue solutions in kind. I'm excited to utilize my proficiency in human factors and product design to bridge the gaps between a team and the people it seeks to serve.",
    image_url: nil
)

puts "🌱 Seeding resumes..."

r1 = Resume.create(
    user_id: u1.id,
    title: "Back-End Software Engineer",
    about: "Nathan is adept and career driven in Backend Design. His ability to effectively communicate and in technical documentation is due to his background in the Pharmaceutical Industry, where he worked with large collaborative teams, achieving organizational goals for patients, nurses and doctors’ needs.",
    user_image: "https://avatars.githubusercontent.com/u/111101890?v=4",
    user_logo: "https://i.kym-cdn.com/entries/icons/original/000/023/397/C-658VsXoAo3ovC.jpg",
    # education: "Flatiron School",
    # skills: "Python | MongoDB",
    # experience: "Database management -- primarily with Java & AWS"
)
r2 = Resume.create(
    user_id: u2.id,
    title: "Full-Stack Software Developer",
    about: "Ex Wheelchair Agent was my first ever full-time job. While some may argue that it's just grunt work and pushing people around in chairs, I developed many skills working here that I will take to future positions.",
    user_image: "https://ca.slack-edge.com/T02MD9XTF-U043PEC6J4W-9406b0b3d620-512",
    user_logo: "https://i.kym-cdn.com/entries/icons/original/000/023/397/C-658VsXoAo3ovC.jpg",
    # education: "Flatiron School",
    # skills: "React.js | Ruby on Rails",
    # experience: "Full-Stack Development with a React frontend and a Rails backend"
)
r3 = Resume.create(
    user_id: u3.id,
    title: "Front-End Web/Software Developer",
    about: "I'm an aspiring Software Engineer that values creating impactful, resonant human experiences. I was born in the Happy Valley, PA, grew up in Johannesburg, South Africa, and finished high school in the suburban Philadelphia area. Design as an influence has been a driving presence in my career, and I hope to carry that intent forward into future engineering roles. A unique aspect of myself is my ability to empathize with one's thoughts and ambitions, and pursue solutions in kind. I'm excited to utilize my proficiency in human factors and product design to bridge the gaps between a team and the people it seeks to serve.",
    user_image: "https://media.licdn.com/dms/image/C5603AQGK91aMiW1wAw/profile-displayphoto-shrink_400_400/0/1614794314189?e=1677715200&v=beta&t=durJZXKIsqqnFkDr2ThqRhe3ErtZtUNdicZ3Uim0njY",
    user_logo: "https://i.kym-cdn.com/entries/icons/original/000/023/397/C-658VsXoAo3ovC.jpg",
    # education: "Flatiron School",
    # skills: "React.js | UX Design",
    # experience: "Product Designer turned Software Developer -- Branding and Marketing"
)
puts "🌱 Seeding projects..."
p1 = Project.create(
    name: "NASA Image Search",
    collaborators: "Nathan Foss, Leah Cardoz, Calvin Jimenez",
    project_data: "Space Image Generator in 3 days using JavaScript, HTML/CSS and NASA API",
    project_video: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Moon_rotating_full_220px.gif?20160322235610",
    project_link: "https://lcardoz.github.io/Phase-1-Project/"
)
p2 = Project.create(
    name: "Quest Apparel",
    collaborators: "Khanya Keswa",
    project_data: "Brand development for Quest Apparel",
    project_video: "https://media.tenor.com/nFi55tsrAcoAAAAC/undertale.gif",
    project_link: "https://www.behance.net/gallery/54904301/Quest-Apparel"
)
p3 = Project.create(
    name: "phase-4-project",
    collaborators: "Jaquan Banks, Nathan Foss, Khanya Keswa",
    project_data: "Resume and project deployment/hosting website, allowing visitors to either browse other projects and professionals or create own profile",
    project_video: "https://media0.giphy.com/media/S2Mvx3WfRD1u9lruEP/giphy.gif",
    project_link: "https://github.com/khanyakeswa/phase-4-project"
)

puts "🌱 Adding resumes to projects..."

# rp1 = ResumeProject.create(resume_id: r1.id, project_id: p1.id, project_image: "https://i.kym-cdn.com/entries/icons/original/000/023/397/C-658VsXoAo3ovC.jpg")
# rp2 = ResumeProject.create(resume_id: r3.id, project_id: p3.id, project_image: "https://i.kym-cdn.com/entries/icons/original/000/023/397/C-658VsXoAo3ovC.jpg")

puts "🌱 Done seeding!"


