<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name 1: <input type="text" name="name1">
  DOB 1: <input type="date" name="dob1">
  Name 2: <input type="text" name="name2">
  DOB 2: <input type="date" name="dob2">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name1 = $_POST["name1"];
    $dob1 = $_POST["dob1"];
    $name2 = $_POST["name2"];
    $dob2 = $_POST["dob2"];

    $date1 = new DateTime($dob1);
    $date2 = new DateTime($dob2);

    $difference = $date1->diff($date2);
    $age1 = (new DateTime())->diff($date1)->y;
    $age2 = (new DateTime())->diff($date2)->y;

    echo "$name1 năm nay $age1 tuổi.<br>";
    echo "$name2 năm nay $age2 tuổi.<br>";
    echo "$name1 hơn $name2 " . $difference->days . " ngày tuổi.";
}
?>