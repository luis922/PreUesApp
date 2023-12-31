import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
// import theme from "../../theme/theme";
import { TextInput } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import validator from "validator"; // biblio para validar directamente.
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import modoDark from "../../ModoDark";
import {LOCAL_HOST} from '@env'
const Reg = ({ navigation }) => {

  const url = `${LOCAL_HOST}:3000/signup/`
  const {theme} = useContext(modoDark)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [user, setUser] = React.useState("");

  //validador de email
  const [emailValidator, setEmailValidator] = React.useState(false);
  const[emailFocus, setEmailFocus] = React.useState(false);
  // validador de user
  const [userValidator, setUserValidator] = React.useState(false);
  const [userFocus, setUserFocus] = React.useState(false);
  // validador de password
  const [passwordValidator, setPasswordValidator] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordFocus2, setPasswordFocus2] = React.useState(false);


  // validamos el nombre del usuario.
  const validarUser = (usuario) =>{
    const user = usuario
    const validador = /^[A-Za-z-0-9 ]+$/; // solo letras minusculas y mayusculas.
    const spaceCount = (usuario.match(/ /g) || []).length; // puede conterner 2 espacios.
    const numbersInText = user.replace(/[^0-9]/g, '').length; // puede contener 3 numeros

    // SI EL USUARIO INGRESA VALORES NO PERMITIDOS, O ES MENOR A 3 CARACTERES, O TIENE MAS DE DOS ESPACIOS O 3 NUMEROS, 
    //SE INDICARA INCORRECTO.
    if(!validador.test(usuario) || usuario.length < 3 || spaceCount > 2 || numbersInText > 3){
      return false
    }
    return true
  }
  
  //Validamos las password.
  const validarPassword = (passW, passW2) =>{
    // que contengan al menos 4 caracteres.
    if(passW.length >= 4 && passW2.length >= 4){  
      /// que las dos contraseñas coincidan.
      return validator.equals(passW, passW2);
      
    }  
    return false
  }

  // Funcion para registrar al usurio
  const register = () =>{

    // Si no se han completado los campos o no estan cumpliendo las indicaciones, se le indicara al usuario.
    if(!userValidator || !passwordValidator || !emailValidator){
      alert('Por favor, complete los campos correctamente')
    }
    else{
      // creamos una constante para enviar los datos al backend.
      const usuario ={ 
        name: user,
        email: email,
        password: password,
      }
      // hacemos la peticion y registrar el usuario.
      axios.post(url, usuario)
      .then((response) => {
        setTimeout(() => {
          navigation.navigate('Log') // lo dirigimos al apartado de login, para que pueda inciar.
        }, 1000);         
      })
      .catch((error) =>{
        console.log(error)
      })
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.bground.bgPrimary,}]}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />
        <Text style={[styles.text, { fontSize: 18 }]}>
          Bienvenido a PreUesApp!
        </Text>
        <Text style={[styles.text, { fontSize: 18 }]}>
          Ingrese sus datos para crear su cuenta
        </Text>
      </View>

      <View>
        <View style={styles.textInputContenedor}>
            <Image source={require('../../assets/email.png')} style={styles.icono} />
            <View>
              {/* textInput para digirar el email del usuario.*/}
              <TextInput
              paddingLeft={30}
              placeholder={"Ingresa un email"}
              style={[
                styles.button,
                { backgroundColor: theme.bground.bgSecondary,
                  borderWidth:2,
                borderColor: !emailValidator && emailFocus ? 'red' : '#FFFFFF'}
              ]}
              onChangeText={(e) => {
                setEmail(e), // iremos seteando todo lo que el usuario digite en el text.
                setEmailValidator(validator.isEmail(email)); // seteamos el Emailvalidator para verificar si el email es valido.
              }}
              onFocus={() =>{
                setEmailFocus(true) // se pondra en true al momento que el usuario interactue con el textInput.
              }}
              maxLength={50} // el maximo de caracteres.
            />
              {/* En caso que no este cumpliendo la validación, se mostrara el siguiente mensaje.  */}
              {emailValidator || !emailFocus ? null: 
              <Text style={{color:'red', fontWeight:600, fontSize:9}}>Escriba un email Valido!</Text>
              }
            </View>
        </View>
        {/* textInput para digirar el nombre de usuario. */}
        <View style={styles.textInputContenedor}>
          <Image source={require('../../assets/user.png')} style={styles.icono} />
          <View>
               <TextInput
                paddingLeft={30}
                placeholder={"Ingresa un nombre de usuario"}
                 style={[
                styles.button,
                { backgroundColor: theme.bground.bgSecondary,
                  borderWidth:2,
                  borderColor: !userValidator && userFocus ? 'red' : '#FFFFFF'},
                ]}
                  onChangeText={(e) =>{
                        setUser(e)
                        setUserValidator(validarUser(e))}
                      }
                      onFocus={() => setUserFocus(true)} // se pondra en true al momento que el usuario interactue con el textInput.
                maxLength={12}
                    />
                  {/* En caso que no este cumpliendo la validación, se mostrara el siguiente mensaje.  */}
                  {userValidator || !userFocus ? null : 
                    <Text style={{color:'red', fontWeight:600, fontSize:9}}>Debe contener solo letras, minimo 3 caracteres, maximo 2 espacios y 3 numeros</Text>
                  }
            </View>
        </View>
        
        <View style={styles.textInputContenedor}>
        <Image source={require('../../assets/password.png')} style={styles.icono} />
                      <TextInput
                      secureTextEntry={true}
                      paddingLeft={30}
                      placeholder={"Ingresa una contraseña"}
                      style={[
                        styles.button,
                        { backgroundColor: theme.bground.bgSecondary, 
                          borderWidth:2,
                          borderColor: !passwordValidator && passwordFocus2 ? 'red' : '#FFFFFF'},
                      ]}
                      onChangeText={(e) => {setPassword(e)
                        setPasswordValidator(validarPassword(e,password2))}}
                      onFocus={() => setPasswordFocus(true)} // se pondra en true al momento que el usuario interactue con el textInput.
                      maxLength={16}
                    />
        </View>
        

        <View style={styles.textInputContenedor}>
        <Image source={require('../../assets/password.png')} style={styles.icono} />
          <View>
            <TextInput
          secureTextEntry={true}
          paddingLeft={30}
          placeholder={"Confirme su contraseña"}
          style={[
            styles.button,
            { backgroundColor: theme.bground.bgSecondary,
            borderWidth:2,
              borderColor: !passwordValidator && passwordFocus2 ? 'red' : '#FFFFFF' },
          ]}
          onChangeText={(e)=>{
            setPassword2(e)
            setPasswordValidator(validarPassword(e,password))}}
          onFocus={() => setPasswordFocus2(true)} // se pondra en true al momento que el usuario interactue con el textInput.
          maxLength={16}
        />
        {/* En caso que no este cumpliendo la validación, se mostrara el siguiente mensaje.  */}
        {passwordValidator || !passwordFocus2 ? null : 
        <Text style={{color:'red', fontWeight:600, fontSize:9}}>Las contraseñas deben coincidir y tener mas de 3 caracteres</Text>
        }
          </View>

        </View>               
        

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.bground.bgInputsPrimary },
          ]}
          onPress={register}
        >
          <Text style={{ color: theme.colors.textPrimary, fontWeight: 600 }}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => {
            navigation.navigate("Log");
          }}
        >
          <Text style={[styles.text, { color: theme.colors.textSecondary }]}>
            Ya tienes una cuenta?{" "}
          </Text>
          <Text style={[styles.text, { color: theme.colors.textbottom }]}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reg;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "99%",
  },

  imagen: {
    width: 349,
    height: 215,
    borderRadius: 10,
  },
  logo: {
    width: 300,
    height: 160,
  },
  buttons: {
    flexDirection: "column",
    width: "90%",
  },
  button: {
    width: 309,
    height: 45,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },

  textInputContenedor:{
    position:'relative',
    display:'flex',
    flexDirection:'row',
  },

  icono:{
    width:20, 
    height:20, 
    position:'absolute',
    top:33, 
    zIndex:2, 
    marginLeft:5
  },
});
