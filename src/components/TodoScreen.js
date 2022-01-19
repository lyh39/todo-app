import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import { WorkToDo } from '../FormShema/WorkToDo'

export const TodoScreen = () => {
    const [workList, setWorkList] = useState([]);
    const [countWorkDone, setContWorkDone] = useState([]);
    const [statusNum, setStatusNum] = useState(true);

    const todoDone = (event) => {
        let id = event.target.value
        workList.forEach((e) => {
            if (e.id === Number(id)) {
                e.status = !e.status;
            }
        })
        
        setWorkList(workList)
        setStatusNum(prev => prev = !statusNum)
        let arr = [];
        workList.forEach((eventVal) => {
            if(eventVal.status === true){
                arr.push(event.status)
            }
        })
        setContWorkDone(arr)
        // console.log(countWorkDone.length)
    }



    return (
        <div className='bg-green-300 p-10'>
            {console.log(countWorkDone.length)}
            {workList.length === 0 ? <div><text>Looks like you are absoluteky free today!</text></div> :
                <div>{workList.map(e => (
                    <div key={e.id}>
                        <input value={e.id} type="checkbox" onClick={todoDone}
                        />
                        {e.status ?
                            <span className='line-through'>{e.value}</span>
                            :
                            <span>{e.value}</span>}
                        {/* <Icon type  /> */}
                    </div>
                ))}</div>}
            <div className='flex justify-center'>
                {countWorkDone.length <= 0 ?
                    <text>DONE:</text>
                    :
                    <text>DONE: {countWorkDone.length}</text>
                }
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

