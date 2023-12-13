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
public class ConexionMariaDB {
    Connection conexion;
    //Datos MariaDb
    /*String host = "127.0.0.1";
    String port = "3306";
    String dbName = "testeo";
    String userName = "root";
    String userPass = "admin";*/
    String host = "127.0.0.1";
    String port = "3306";
    String dbName = "testeo";
    String userName = "root";
    String userPass = "admin";
    
    //Datos SQLServer
    
    public ConexionMariaDB(String host, String port, String dbName, String userName, String userPass){
        try{
            this.host=host;
            this.port=port;
            this.dbName=dbName;
            this.userName=userName;
            this.userPass=userPass;
            //Conexion para MariaDB 
            Class.forName("org.mariadb.jdbc.Driver");
            String url = "jdbc:mariadb://" + this.host +":" + this.port + "/" + this.dbName;
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
