import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { WorkToDo } from '../FormShema/WorkToDo';
import CloseIcon from '@mui/icons-material/Close';

export const TodoScreen = () => {
    const [workList, setWorkList] = useState([]);
    const [counter, setCounter] = useState(0);

    const counterFunction = () => {
        let count = 0;
        workList.forEach((ele) => {
            if (ele.status) {
                count = count + 1;
            }
        })
        setCounter(count);
    }

    useEffect(() => {
        counterFunction();
    }, [workList])

    const todoDone = (event) => {
        let id = event.target.value;
        workList.forEach((e) => {
            if (e.id === Number(id)) {
                e.status = !e.status;
            };
        });
        setWorkList(workList);
        counterFunction();
    };

    const removeTodo = (event) => {
        let arr = [];
        workList.filter((idVal) => {
            if (event !== idVal.id) {
                arr.push(idVal);
            };
        });
        setWorkList(arr);
    };


    return (
        <div className='py-4'>
            {workList.length === 0 ?
                <div className='flex justify-center text-sm border-b border-slate-300 w-full pb-4'><text className='text-grey-400'>Looks like you are absoluteky free today!</text></div>
                :
                <div className='border-b border-slate-300 pb-4'>{workList.map(e => (
                    <div className='flex justify-between pt-1 pb-1' key={e.id}>
                        <div>
                            <input className='mr-2 focus:ring-0' style={{ height: 12, width: 12 }} value={e.id} type="checkbox" onClick={todoDone}
                            />
                            {e.status ?
                                <span className='line-through text-sm'>{e.value}</span>
                                :
                                <span className='text-sm'>{e.value}</span>}
                        </div>
                        <div>
                            <button onClick={() => removeTodo(e.id)}>
                                <CloseIcon style={{ fontSize: 14 }} className='bg-grey-200' />
                            </button>
                        </div>
                    </div>
                ))
                }
                </div>
            }
            <div className='flex justify-center mt-2'>
                <text>DONE:{counter}</text>
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
                        <div className='flex justify-center w-full mt-2'>
                            <div className='pr-1 '>
                                <div>
                                    <Field className="rounded shadow-md text-sm" type="text" name="todoName" placeholder="Enter New Task" />
                                </div>
                                {props.errors.todoName ? <div className='pt-2'>
                                    <text className='text-red-500'>{props.errors.todoName}</text>
                                </div> : null}
                            </div>
                            <div >
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
};
