<?php   

class ChildClass extends ArrayObject {

    
    public function __set($name, $val) {            // inheriting function from base class
        $this[$name] = $val;
    }
    

    public function displayAsTable() {             // Declaring displayAsTable() function as per requirements 
        $table =  '<table>';
        $table .= '<tbody>';    
        $all_data = (array) $this;
        foreach ($all_data as $key => $value) {
            $table .= '<tr>';
            $table .= '<td>' . $key . '</td>';
            $table .= '<th>' . $value . '</th>';
            $table .= '</tr>';
        }    
        $table .= '</tbody>';
        $table .=  '</table>';    
        return $table;
    } 
}

$obj_childClass = new ChildClass(); 

$obj_childClass->Emp_Id = 456;   
$obj_childClass->Name = 'Md. Abdullah Al Murad '; 
$obj_childClass->Dept = 'Engineering'; 
$obj_childClass->Stack = 'SAP'; 
$obj_childClass->Running_Project = 20;

echo $obj_childClass->displayAsTable();    

?>