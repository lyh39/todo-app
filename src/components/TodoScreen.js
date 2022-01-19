import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import { WorkToDo } from '../FormShema/WorkToDo'

export const TodoScreen = () => {
    const [workList, setWorkList] = useState([]);
    const [statusNum, setStatusNum] = useState(true);

    const todoDone = (event) => {
        console.log(event.target.value)
        let id = event.target.value
        let completeTodo = workList.forEach((e) => {
            if (e.id === Number(id)) {
                e.status = !e.status;
            }
        })
        console.log(workList)
        setWorkList(workList)
        setStatusNum(pre => !statusNum);
    }

    return (
        <div className='bg-green-300 p-10'>
            {workList.length === 0 ? <div><text>Looks like you are absoluteky free today!</text></div> :
                <div>{workList.map(e => (
                    <div key={e.id}>
                        {console.log(e.status, e.value)}
                        <input value={e.id} type="checkbox" onClick={todoDone}
                        />
                        {e.status ?
                            <span className='line-through'>{e.value}</span>
                            :
                            <span>{e.value}</span>}
                    </div>
                ))}</div>}
            <div className='flex justify-center'>
                <text className='text-xl'>
                    DONE:
                </text>
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
                {() => (
                    <Form>
                        <div className='flex justify-center w-full'>
                            <div className='pr-1 '>
                                <Field type="text" name="todoName" placeholder="Enter New Task" />
                            </div>
                            <div className=''>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    ADD TASK
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

