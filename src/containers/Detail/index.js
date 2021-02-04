import React, { Component } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import './style.css'


class Detail extends Component{

    constructor(props) {
        super(props)
        this.state = {
            title:'',
            content: ''
        }
    }

    render() {
        return (
            <Card title={this.state.title}>
                {/* <p>{this.state.content}</p> */}
                {/* 可以对获取到的带有p标签和img标签的数据作转译 */}
                <div className="detail" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </Card>
        )
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/detail.json?id=' + id)
            .then((res) => {
                const data = res.data.data
                console.log(data);
                this.setState(data)
            })
    }
}

export default Detail