import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'




function NewProject() {

  const navigate = useNavigate()


  function createPost(project) {
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects",{
      method: "POST",
      headers:{
        "content-type": 'application/json'
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) =>{
      navigate('/projects', {state: {message: 'Projecto criado com sucesso!'}})
    })
    .catch((err) => console.log(err))
  }





  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar Projecto</h1>
      <p>Crie seu projecto para depois adicionar serviços</p>
      
      <ProjectForm 
        btnText='Criar Projecto'
        handleSubmit={createPost}>
      </ProjectForm>
    </div>
  )
}

export default NewProject 