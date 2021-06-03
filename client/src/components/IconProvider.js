import React, {useState, createContext} from 'react';
import html from '../static/html.png'
import css from '../static/css.png'
import js from '../static/js.png'
import ruby from '../static/ruby.png'
import java from '../static/java.png'
import python from '../static/python.png'
import swift from '../static/swift.png'
import angular from '../static/angular.png'
import bootstrap from '../static/bootstrap.png'
import django from '../static/django.png'
import jquery from '../static/jquery.png'
import react from '../static/react.png'
import node from '../static/node.png'
import vue from '../static/vue.png'


export const IconContext = createContext();


export const IconProvider = (props) => {
        const [name, setName] = useState("")
        const [bio, setBio] = useState("")
        const [skills, setSkills] = useState([])
        const [progress,setProgress] = useState(0)
        const [loggedUser, setLoggedUser] = useState({})
    
    
        const [enumObj, setEnumObj] = useState({
            html: html,
            css: css,
            js: js,
            ruby: ruby,
            java: java,
            python: python,
            swift: swift,
            angular: angular,
            bootstrap: bootstrap,
            django: django,
            jquery: jquery,
            react: react,
            node: node,
            vue: vue
        })
        return(
            <IconContext.Provider value={{
                icons:[enumObj,setEnumObj], 
                name:[name,setName], 
                bio:[bio, setBio], 
                skills:[skills, setSkills], 
                progress:[progress, setProgress], 
                user:[loggedUser,setLoggedUser]}}>
                {props.children}
            </IconContext.Provider>
        )
        
}
