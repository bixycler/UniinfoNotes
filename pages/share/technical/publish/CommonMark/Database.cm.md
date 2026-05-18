## Database <a class="logseq-meta" id="68089c74-7fbd-471b-9283-febf6b48cd0d" data-logbook="CLOCK: [2025-04-23 Wed 14:30:31]&#10;" ></a>
	- [Wiki:](../../../../publish/CommonMark/Namespace.cm.md#665359c0-a89a-41b5-9f28-503f79107a08) https://en.wikipedia.org/wiki/Database
	- ### MySQL <a class="logseq-meta" id="680a0a2a-8faf-40e2-bd06-af7e531039db" data-logbook="CLOCK: [2025-04-23 Wed 14:32:49]&#10;" ></a>
		- [Wiki:](../../../../publish/CommonMark/Namespace.cm.md#665359c0-a89a-41b5-9f28-503f79107a08) https://en.wikipedia.org/wiki/MySQL
		- Install in Ubuntu <a class="logseq-meta" id="6809ff36-1981-4660-83b0-fc68197dcbe2" data-collapsed="true" ></a>
			- `sudo apt install mysql-server`
			- Check service: `sudo systemctl status mysql` or `sudo service mysql status`
			- Check network port: `sudo ss -tap | grep mysql`
			- Check log: `sudo journalctl -u mysql`
		- `root` setup
			- `sudo mysql -u root` → `mysql -u root -p`
				- `sudo`: By default, MySQL authenticates using system credentials, via plugin `auth_socket` (or `unix_socket`), rather than a password.
					- Check plugin <a class="logseq-meta" data-collapsed="true" ></a>
						- select
						  ```sql
						  USE mysql;
						  SELECT User, Host, plugin FROM user WHERE User='root';
						  ```
						- result
						  ```sql
						  +------+-----------+-------------+
						  | User | Host      | plugin      |
						  +------+-----------+-------------+
						  | root | localhost | auth_socket |
						  +------+-----------+-------------+
						  ```
				- For password-based auth (`mysql -u root -p`), change the root user’s authentication plugin to `mysql_native_password` and set `your_SQL_root_password`. <a class="logseq-meta" id="6819d2a7-c06d-4146-af4f-c59298db4a95" data-collapsed="true" ></a>
					- set `mysql_native_password` to `root`
					  ```sql
					  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_SQL_root_password';
					  FLUSH PRIVILEGES;
					  ```
					- `SELECT User, Host, plugin FROM user WHERE User='root';`
					  ```sql
					  +------+-----------+-----------------------+
					  | User | Host      | plugin                |
					  +------+-----------+-----------------------+
					  | root | localhost | mysql_native_password |
					  +------+-----------+-----------------------+
					  ```
					- `exit` and optionally restart service: `sudo service mysql restart`
					- Log in again `mysql -u root -p` with `your_SQL_root_password`, should be OK.
					- `exit` and log in again with `sudo mysql -u root`, should be NG:
					  <br>`ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)`
		- <zwsp>
	- ### Oracle Database <a class="logseq-meta" data-logbook="CLOCK: [2025-04-23 Wed 14:32:49]&#10;" ></a>
		- [Wiki:](../../../../publish/CommonMark/Namespace.cm.md#665359c0-a89a-41b5-9f28-503f79107a08) https://en.wikipedia.org/wiki/Oracle_Database
