/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package testeo;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
/**
 *
 * @author emila
 */
public class ConexionSqlServer {
    Connection conexion;
    //Datos SqlServer
    /*String host = "localhost";
    String port = "1433";
    String dbName = "testeo";
    String userName = "sa";
    String userPass = "admin";*/
    String host = "";
    String port = "";
    String dbName = "";
    String userName = "";
    String userPass = "";
    
    public ConexionSqlServer(String host, String port, String dbName, String userName, String userPass){
        try{
            //Conexion para SQLServer
            this.host=host;
            this.port=port;
            this.dbName=dbName;
            this.userName=userName;
            this.userPass=userPass;
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String url = "jdbc:sqlserver://" + this.host + ":" + this.port + ";databaseName=" + this.dbName + ";trustServerCertificate=true";
            conexion = DriverManager.getConnection(url, this.userName, this.userPass);
            System.out.println("Host:" + host);
            System.out.println("Conexion Exitosa");
        }catch (ClassNotFoundException | SQLException e){
            e.printStackTrace();
        }
    }
    
    public void desconectar(){
        try{
            conexion.close();
        }catch (SQLException e){
        }
    }
    
}
