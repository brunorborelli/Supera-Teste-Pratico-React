import React from 'react';
import UserService from '../services/UserService';
import "./style.css";
class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            
            <div className="divpai" >
               
                <h1 className = "text-center" id="texto1" > Extrato Bancário</h1>
                <table id="tableddn" >
                    
            <th id='dataInicio'>Data Inicio</th> <th id="dataFim">Data Fim</th> <th> Nome do Cliente</th>
            <tr>
                <td id='dataInicio1'> 18/04/2022 </td> <td> 24/04/2022 </td> <td> Bruno Borelli </td>
            </tr>
            
                </table>
                 <p>Saldo total: <span id="saldoTotal">*********</span> Saldo no periodo: <span id="saldoPeriodo">*********</span> </p>
                
                <table className = "table" id="tableGeral">
                    
                    

                    <th id='tableHead2'>Data</th> <th id='tableHead2'>Valor</th> <th id='tableHead2'>Tipo</th> <th id='tableHead2'>Operador</th>
                        
                
                
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td id="dataOperacao"> {user.data}</td>   
                                     <td id="valorOperacao"> {user.valorOperacao}</td>   
                                     <td id="tipoOperacao"> {user.tipoOperacao}</td>   
                                     <td id="nomeOperador"> {user.nomeOperador}</td>
                                     <td> {user.transacao}</td>     
                                </tr>
                            )
                        }

                    
                </table>
                <span class="spanbutton"><button class="button1"> Pagina anterior </button> 1 <button class="button2"> Proxima pagina </button></span>
            </div>

        )
    }
}

export default UserComponent