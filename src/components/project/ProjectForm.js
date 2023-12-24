import { useState, useEffect } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'



function ProjectForm({btnText, handleSubmit, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() =>{
        fetch("http://localhost:5000/categories",{
            method: "GET",
            headers: {
                "content-type": "application/json",
            }
        })
        .then((resp) => resp.json())
        .then((data) =>{
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])


    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
    }


    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }
    function handleCategory(e) {
        setProject({
            ...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }




    return(
        <form className={styles.form} onSubmit={submit}>
            <Input 
                type='text'
                name='name'
                text='Nome do projecto' 
                placeholder='Insira o nome do projecto'
                handleOnchange={handleChange}
                value={project.name ? project.name : ''}>
            </Input>

            <Input 
                type='number'
                name='budget'
                text='Orçamento do projecto' 
                placeholder='Insira o orçamento total'
                handleOnchange={handleChange}
                value={project.budget ? project.budget : ''}>
            </Input>

            <Select
                name='categoryId'
                text='Selecione a categoria'
                options={categories}
                handleOnchange={handleCategory}
                value={project.category ? project.category.id : ''}>
            </Select>

            <SubmitButton
                text={btnText}>
            </SubmitButton>
        </form>
    )
}
export default ProjectForm;