import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { number } from 'yup';
// import { TextInput } from 'react-native-gesture-handler'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, deleteuser, edituser } from '../redux/slice/crud.slice';
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default function ProductCrud() {
    const [update, setupdate] = useState(false)
    const [search , setsearch] = useState('')

    console.log("ssssssssssssssssssssssssssss",search);

    const userSchema = yup.object({
        name: yup.string().required(),
        age: yup.number().required().positive().integer(),
        password: yup.number().required().positive()
    });
    const dispatch = useDispatch()

    const mathId = Math.floor(Math.random() * 1000);
    // console.log("iiddddddddddddddddddd", mathId);


    const userData = useSelector(state => state.crud)
    

   


    console.log("ooooooooooooooooooooooo", userData);

    const handledelete = (id) => {
        // console.log("9999999999999999999999999999999",id);
        dispatch(deleteuser(id))
    }

    const handleEdit = (data) => {
        setValues(data)
        setupdate(true)
        console.log("99999999999999999999", data);
    }

    const formik = useFormik({
        initialValues: {
            password: '',
            age: '',
            name: '',
        },
        validationSchema: userSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("pppppppppppppppppp", values);
            if (update) {
                dispatch(edituser(values));
            } else {
                dispatch(adduser({ ...values, id: mathId }))
            }

            setupdate(false)
            resetForm();
        },
    })
    const searchsortdata = () => {

        let fdata = {...userData.crud}
       
        fdata = userData.crud.filter((v) =>

            v.name.toLowerCase().includes(search.toLowerCase()) ||
            v.age.toLowerCase().includes(search.toLowerCase()) ||
            v.password.toLowerCase().includes(search.toLowerCase())
        )

        return fdata;
    }

    const fdata = searchsortdata();

    const { handleChange, handleBlur, setValues, touched, handleSubmit, errors, values } = formik;
    return (
        <View >
            <Text style={{ marginBottom: 30 }}>form</Text>

            <TextInput
                // onChangeText={() => {searchsortdata(), setsearch}}
                style={style.input}
                placeholder='search....!'
                onChangeText={setsearch}
            />



            <TextInput
                name='name'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                style={style.input}
                placeholder='enter name'
            />
            {touched.name && errors.name ? <Text>{errors.name}</Text> : null}


            <TextInput
                name='age'
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
                style={style.input}
                placeholder='enter age'
            />
            {touched.age && errors.age ? <Text>{errors.age}</Text> : null}


            <TextInput
                name='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={style.input}
                placeholder='enter password'
            />
            {touched.password && errors.password ? <Text>{errors.password}</Text> : null}

            <TouchableOpacity
                style={style.submit}
                onPress={handleSubmit}>
                <Text style={{ color: 'white', fontSize: 20 }}>submit</Text>
            </TouchableOpacity>


            {
                fdata.map((v, i) => {
                    // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvv", v);
                    return (
                        <View key={v.id} style={{ marginTop: 30, marginHorizontal: 26 }}>
                            <Text style={{ color: 'black' }}>{v.name}</Text>
                            <Text style={{ color: 'black' }}>{v.age}</Text>
                            <Text style={{ color: 'black' }}>{v.password}</Text>
                            <TouchableOpacity onPress={() => handledelete(v.id)}>
                                <Text style={{ fontWeight: 'bold' }}>Delet</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 8 }} onPress={() => handleEdit(v)}>
                                <Text style={{ fontWeight: 'bold' }}>edit</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 2,
        width: 300,
        height: 45,
        padding: 10,
        marginHorizontal: 30,
        marginBottom: 10,
    },
    submit: {
        backgroundColor: '#ff6347',
        padding: 6,
        marginHorizontal: 26,
    }
})