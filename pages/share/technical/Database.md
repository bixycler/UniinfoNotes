## Database
:LOGBOOK:
CLOCK: [2025-04-23 Wed 14:30:31]
:END:
	- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Database
	- ### MySQL
	  :LOGBOOK:
	  CLOCK: [2025-04-23 Wed 14:32:49]
	  :END:
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/MySQL
		- Install in Ubuntu
		  id:: 6809ff36-1981-4660-83b0-fc68197dcbe2
		  collapsed:: true
			- `sudo apt install mysql-server`
			- Check service: `sudo systemctl status mysql` or `sudo service mysql status`
			- Check network port: `sudo ss -tap | grep mysql`
			- Check log: `sudo journalctl -u mysql`
			- from UniinfoNotes & WORK!
		- `root` setup
			- `sudo mysql -u root`
				- `sudo`: By default, MySQL authenticates using system credentials rather than a password.
				- For password-based auth (`mysql -u root -p`)
	- ### Oracle Database
	  :LOGBOOK:
	  CLOCK: [2025-04-23 Wed 14:32:49]
	  :END:
		- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/Oracle_Database