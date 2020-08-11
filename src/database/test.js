const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: 'Jhonny Lima',
    avatar: 'https://avatars2.githubusercontent.com/u/27383569?s=460&u=692a00b2cf047abe4c759bc253af695d7c9d9f4f&v=4',
    whatsapp: '15987654321',
    bio: "Jhonny's biography lorem ipsum lobortis etiam malesuada accumsan sapien. Phasellus scelerisque venenatis blandit sodales odio cras auctor nam, aptent placerat purus egestas adipiscing egestas pharetra nunc imperdiet conubia nunc lorem.",
  }

  classValue = {
    subject: 7,
    cost: '30',
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues })

  // all proffys
  const selectedProffys = await db.all("SELECT * FROM proffy")
  // console.log(selectedProffys)

  // all classes and data from a specific proffy
  const selectClassesAndProffy = await db.all(`
    SELECT p.*, c.*
    FROM proffy p
    JOIN class c ON (c.proffy_id = p.id)
    WHERE p.id = 1;
  `)
  // console.log(selectClassesAndProffy)

  const selectClassSchedules = await db.all(`
    SELECT cs.*
    FROM class_schedule cs
    WHERE cs.class_id = "1"
    AND cs.weekday = "0"
    AND cs.time_from <= "520"
    AND cs.time_to > "520";
  `)
  console.log(selectClassSchedules)
})