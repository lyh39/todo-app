import * as Yup from 'yup';

export const WorkToDo = Yup.object().shape({
todoName: Yup.string().required('Please enter a Task'),
});
