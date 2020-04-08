
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

  
    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div>
                 <InputNumber value={value} onChange={e=>{value=e.target.value}}/>
                 <InputNumber defaultValue={value} onChange={e=>this.handleChange(e)} ref={ref => this.input = ref}/>
            </div>
        )
    }
}
