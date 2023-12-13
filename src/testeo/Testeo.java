/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package testeo;
import java.sql.SQLException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.sql.ResultSet;
import java.sql.DatabaseMetaData;
import java.util.ArrayList;
import javax.swing.JOptionPane;
/**
 *
 * @author emila
 */
public class Testeo {


    public static ArrayList<String> parseForeignKeys(String input) {
        // Lista para almacenar las tablas referenciadas
        ArrayList<String> referencedTables = new ArrayList<>();

        // Definir el patrón de expresión regular
        String regex = "FOREIGN KEY \\(\\w+\\) REFERENCES (\\w+) \\(\\w+\\)";
        Pattern pattern = Pattern.compile(regex);

        // Crear el objeto Matcher para buscar el patrón en la cadena de entrada
        Matcher matcher = pattern.matcher(input);

        // Procesar todas las coincidencias
        while (matcher.find()) {
            // Obtener la tabla referenciada y agregarla a la lista
            String referencedTable = matcher.group(1);
            referencedTables.add(referencedTable);
        }

        return referencedTables;
    }

    public static String convertMariaDBToSQLServer(String mariaDBSql) {
        
        boolean hasMatches = false;
        String sqlServerSql = mariaDBSql;
        do{
            sqlServerSql = mariaDBSql.replaceAll("int\\((\\d+)\\)", "int")
                         .replaceAll("varchar\\((\\d+)\\)", "varchar($1)")
                         .replaceAll("AUTO_INCREMENT", "");

            sqlServerSql = sqlServerSql.replaceAll("ENGINE=InnoDB", "");

            sqlServerSql = sqlServerSql.replaceAll("\\bKEY\\s+`[^`]+`\\s*\\([^)]*\\),", "");
            sqlServerSql = sqlServerSql.replaceAll("DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci", "");

            
            
            sqlServerSql = sqlServerSql.replaceAll("`", "").replaceAll("`", "");


            sqlServerSql = sqlServerSql.replaceAll("CHARACTER SET [^ ]+ COLLATE [^ ]+", "");

            sqlServerSql = sqlServerSql.replaceAll("CONSTRAINT \\w+ FOREIGN KEY \\(([^)]+)\\) REFERENCES (\\w+) \\(([^)]+)\\) ON UPDATE CASCADE",
                                        "FOREIGN KEY ($1) REFERENCES $2 ($3) ON UPDATE CASCADE");
            
            sqlServerSql = sqlServerSql.replaceAll("CONSTRAINT \\w+ FOREIGN KEY \\(([^)]+)\\) REFERENCES (\\w+) \\(([^)]+)\\) ON DELETE CASCADE",
                                        "FOREIGN KEY ($1) REFERENCES $2 ($3) ON UPDATE CASCADE");
            
            sqlServerSql = sqlServerSql.replaceAll("CONSTRAINT \\w+ FOREIGN KEY \\(([^)]+)\\) REFERENCES (\\w+) \\(([^)]+)\\) ON UPDATE SET NULL",
                                        "FOREIGN KEY ($1) REFERENCES $2 ($3) ON UPDATE SET NULL");
            
            sqlServerSql = sqlServerSql.replaceAll("CONSTRAINT \\w+ FOREIGN KEY \\(([^)]+)\\) REFERENCES (\\w+) \\(([^)]+)\\) ON DELETE SET NULL",
                                        "FOREIGN KEY ($1) REFERENCES $2 ($3) ON UPDATE SET NULL");
            

            
            
            if (!sqlServerSql.equals(mariaDBSql)) {
                hasMatches = true;
            }
            
        } while(hasMatches==false);
        
        


        return sqlServerSql;
    }

    public static void Replica(ArrayList<String> sentencias, String nombreTabla, ConexionMariaDB con, DatabaseMetaData metaData) throws SQLException{
        
        ArrayList<String> col = new ArrayList<>();
        String createTable = "";
        Statement originStmt = con.conexion.createStatement();
        ResultSet tabla = originStmt.executeQuery("select * from "+ nombreTabla);
        ResultSet esquemas = originStmt.executeQuery("Show create table "+ nombreTabla);
        if (esquemas.next()) {
            createTable = esquemas.getString("Create Table");
            createTable = convertMariaDBToSQLServer(createTable);
            createTable+=';';
            //System.out.prin1tln(createTable);
            ArrayList<String> referencias = parseForeignKeys(createTable);
            for (String referencia : referencias) {
                Replica(sentencias, referencia, con, metaData);
            }
            sentencias.add("IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = '" + nombreTabla + "') " +
                                    "DROP TABLE " + nombreTabla + ";");
            sentencias.add(createTable);
            ResultSet columns = metaData.getColumns(null, null, nombreTabla, null);

            while (columns.next()) {
                String nombreColumna = columns.getString("COLUMN_NAME");
                //System.out.println(nombreColumna);
                col.add(nombreColumna);
            }
            while (tabla.next()){
                String insert = "insert into " + nombreTabla + " values (";
                for(int i =0; i<col.size();i++){
                    //System.out.println("Nombre de la columna: " + col.get(i));
                    String valor = obtenerValorFormateado(tabla.getObject(col.get(i)));
                    //System.out.println("Valor formateado: " + valor);
                    insert += valor;
                    if (i==col.size()-1){

                    }else{
                        insert += ",";
                    }

                }
                insert +=");";
                sentencias.add(insert);
            }
        }else{
            System.out.println("No");
        }
        
    }
    
    private static String obtenerValorFormateado(Object valor) {
        if (valor == null) {
            return "NULL";
        } else if (valor instanceof Integer || valor instanceof Long || valor instanceof Short) {
            return valor.toString();
        } else if (valor instanceof String) {
            // En caso de ser una cadena, envolverla en comillas simples
            return "'" + valor + "'";
        } else {
            // Otros tipos de datos podrían necesitar tratamiento adicional
            return valor.toString();
        }
    }
    
    public static void main(String[] args) {
        /*String nombreTabla="";
        ArrayList<String> sentencias = new ArrayList<>();
        ConexionMariaDB connect2 = new ConexionMariaDB();
        try {
            Statement originStmt = connect2.conexion.createStatement();
            ResultSet rs = originStmt.executeQuery("select table_name from information_schema.tables where table_schema='" + connect2.dbName+ "' and table_name <> 'bitacora'");
            DatabaseMetaData metaData = connect2.conexion.getMetaData();
            //while(rs.next()){
               // nombreTabla = rs.getString(1);
                //System.out.println(nombreTabla);
                Replica(sentencias, "prueba3", connect2, metaData);
                for (String sentencia : sentencias) {
                    System.out.println(sentencia);
                }
            //}
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        connect2.desconectar();*/
        main window = new main ();
        window.setLocationRelativeTo(null);
        window.setVisible(true);

    }

    
}
