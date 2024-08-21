import { getAllUsers } from "../controller/user.controller";
describe("UserController", ()=>{
    describe('when getting all users', () =>{
        let result: string, 
        beforeEach(() => {
            result = getAllUsers();
        });
        it('shoud return the users', () =>{
            expect(result).toBe('all users');
        });
    });
});