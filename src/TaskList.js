/* eslint-disable no-console */
import React from "react";
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core'
class TaskList extends React.Component {
    constructor() {
        super()
        this.state = {
            taskName: [], value: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleButton = this.handleButton.bind(this)
        this.render = this.render.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
    }
    handleChange(event) {
        this.setState(
            { value: event.target.value }
        )
    }
    handleButton() {
        if (this.state.value !== "")
            this.setState(
                { taskName: [...this.state.taskName, this.state.value] }
            )
    }
    deleteTask(event) {
        let array = [...this.state.taskName]
        let index = array.indexOf(event.currentTarget.id);
        array.splice(index, 1);
        this.setState(
            { taskName: array }
        )
    }
    editTask(event) {
        let array = [...this.state.taskName]
        let index = array.indexOf(event.currentTarget.id);
        let edited = prompt("Edit the task")
        array[index] = edited
        this.setState(
            { taskName: array }
        )
    }
    render() {
        return (<form><h1>TODO LIST</h1>
            <TextField
                id="outlined-name"
                label="Task"
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            />
            <br></br>
            <Button variant="contained" color="primary" onClick={this.handleButton}>
                ADD TASK
      </Button>
            <hr />
            <h1>YOUR TASKS</h1>
            <List>
                {this.state.taskName.map(item => (
                    <ListItem key={item} alignItems="flex-start">
                        <ListItemText>{item}
                            &emsp;<Button id={item} variant="contained" size="small" onClick={this.editTask}>EDIT</Button>
                            &emsp;<Button id={item} variant="contained" size="small" onClick={this.deleteTask}>DELETE</Button>
                        </ListItemText>
                    </ListItem>
                ))}<hr />
            </List>
        </form>)
    }
}
export default TaskList