import { TODO } from '../type';

export const todo = () => (dispatch: any) => {
    try {
        dispatch({
            type: TODO,
            value: 'Hello, My First App With Action in Redux'
        });
    } catch (error) {
        if (error) {
            
        }
    }
}