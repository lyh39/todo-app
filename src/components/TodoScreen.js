import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import { WorkToDo } from '../FormShema/WorkToDo'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export const TodoScreen = () => {
    const [workList, setWorkList] = useState([]);
    const [countWorkDone, setContWorkDone] = useState([]);

    // const WorkToDo = Yup.object().shape({
    //     todoName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('required')
    // });

    const todoDone = (event) => {
        let id = event.target.value
        workList.forEach((e) => {
            if (e.id === Number(id)) {
                e.status = !e.status;
            }
        })
        setWorkList(workList)
        let arr = [];
        workList.forEach((eventVal) => {
            if (eventVal.status === true) {
                arr.push({ id: eventVal.id, status: eventVal.status })
            }
        })
        setContWorkDone(arr)
    }

    const removeTodo = (event) => {
        let arr = [];
        let arrCount = [];
        workList.filter((idVal) => {
            if (event !== idVal.id) {
                arr.push(idVal)
            }
        })
        setWorkList(arr);
        countWorkDone.filter((ival) => {
            console.log(ival)
            if (event !== ival.id) {
                arrCount.push(ival)
            }
        })
        setContWorkDone(arrCount)
    }


    return (
        <div className='bg-green-300 p-10'>
            {workList.length === 0 ? <div><text>Looks like you are absoluteky free today!</text></div> :
                <div>{workList.map(e => (
                    <div className='flex justify-between' key={e.id}>
                        <div>
                            <input className='mr-2' value={e.id} type="checkbox" onClick={todoDone}
                            />
                            {e.status ?
                                <span className='line-through'>{e.value}</span>
                                :
                                <span>{e.value}</span>}
                        </div>
                        <div>
                            <button onClick={() => removeTodo(e.id)}>
                                <CancelPresentationIcon fontSize="small" />
                            </button>
                        </div>
                    </div>
                ))}</div>}
            <div className='flex justify-center'>
                {countWorkDone.length <= 0 ? <text>DONE:</text> : <text>DONE: {countWorkDone.length}</text>}
            </div>
            <Formik
                initialValues={{
                    todoName: ""
                }}
                validateOnBlur
                validationSchema={WorkToDo}
                onSubmit={(values, { resetForm }) => {
                    setWorkList([...workList, { id: workList.length, value: values.todoName, status: false }]);
                    resetForm({ values: '' })
                }}
            >
                {(props) => (
                    <Form>
                        <div className='flex justify-center w-full'>
                            <div className='pr-1 '>
                                <div>
                                    <Field className="rounded border-none shadow-md" type="text" name="todoName" placeholder="Enter New Task" />
                                </div>
                                {props.errors.todoName ? <div className='pt-2'>
                                    <text className='text-red-500'>{props.errors.todoName}</text>
                                </div> : null}

                            </div>
                            <div className=''>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
                                    ADD TASK
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    );
}

