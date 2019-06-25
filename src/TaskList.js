import React from "react";
import {TextField,Button,List,ListItem,ListItemText} from '@material-ui/core'
class TaskList extends React.Component
{
    constructor()
    {
        super()
        this.state={
            taskName:[],value:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleButton=this.handleButton.bind(this)
        this.render=this.render.bind(this)

    }
    handleChange(event)
    {
        this.setState(
            {value:event.target.value}
        )
    }
    handleButton()
    {
        if(this.state.value!=="")
        this.setState(
            {taskName:[...this.state.taskName,this.state.value]}
          )
    }
    render()
    {
        return(<form>
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
      <List>
            {this.state.taskName.map(item=>(
      <ListItem key={item} alignItems="flex-start">
        <ListItemText>{item}
        &emsp;<Button variant="contained" size="small">EDIT</Button>
        &emsp;<Button variant="contained" size="small">DELETE</Button>
        </ListItemText>
     
      </ListItem>
      ))}
      </List>
        </form>)
    }
}


export default TaskList