<?php
    $uid = htmlspecialchars($_COOKIE['uid']);

   	if (isset($uid)){
		try {	    	

            $stmt = $conn->prepare("SELECT * FROM accounts WHERE cid= ?");
            $stmt->bind_param('s', $uid);

            $stmt->execute();

            $resultado = $stmt->store_result();

			if (!$resultado) {
				throw (new Exception('Error executing query: '.$conn->error, $conn->errorno));
			}
?>