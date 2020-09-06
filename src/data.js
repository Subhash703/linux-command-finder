//Static data file

export const storeProducts = [
  {
    
    id: 1,
    command: "tty",
    title: "This command is used to show the current logged in users",
    info:
      "tty - print the file name of the terminal connected to standard input",
    options:[
      {
        option:'-s',
        optionDescription:"print nothing, only returb an exit status"
      }
    ]
  },
  {
    
    id: 2,
    command: "who",
    title: "show who is logged on",
       info:
      "checking all the users logged in any terminal",
    options:[
      {
        option:'-a',
        optionDescription:"all useds logged in"
      },
      {
        option:'-b',
        optionDescription:"The time of last system boot"
      },
      {
        option:'-u',
        optionDescription:"List users logged in"
      }
    ],
    
  },
  {
 
    id: 3,
    command: "cal",
    title: "Show calender",
    img: "img/tesla_car_3.png",
       info:
      "cal, ncal — displays a calendar and the date of Easter",
    options:[
      {
        option:'-h',
        optionDescription:"Turns off highlighting of today."
      }
    ]
  },
  {

    id: 4,
    command: "usermod",
    title: "Modify user authentication",
    info:
        `he usermod command modifies the system account files to reflect the changes that are specified on the command line.`,
    options:[
      {
        option:'-a',
        optionDescription:"add the user to the supplementary group, use only with the -G iption"
      },
      {
        option:'-c : comment',
        optionDescription:"The new value of the user's password file comment field"
      },
      {
        option:'-d',
        optionDescription:"If the -m option is given , the contents of the current home directory will be moved to the new home directory"
      },
      {
        option:'-e : expiredate',
        optionDescription:"The date on which the user account will be disabled. The date format is YYYY-MM-DD, empty date will set to 'never'."
      },
      {
        option:'-g : GID',
        optionDescription:"Changing group to which user belongs, it can be done either using GID or name of new group."
      },
      {
        option:'-G',
        optionDescription:`Assign Supplementary Groups `
      },
      {
        option:'-s',
        optionDescription:`Change login shell, it can be seen as /etc/shells`
      },
      {
        option:'-L',
        optionDescription:"Lock a user's password. This puts '!' in front of the encrypted password"
      },
      {
        option:'-U',
        optionDescription:"Unlock user"
      },
      {
        option:'-l',
        optionDescription:"Change Login Name of user"
      },
      {
        option:'-p : password',
        optionDescription:"The encrypted password, as returned by crypt. Eg : 'usermod -p 'openssl passwd' user'"
      },
      {
        option:'-u',
        optionDescription:"Change UID"
      },
    ]
  },
  {
    id: 5,
    command: "history",
    title: "To recent check history ",  
    info:
      `This command is used to print out the all commands you typed recentlly`,
    options:[
      {
        option:'!<command_number>',
        optionDescription:"It will run that command"
      },
      {
        option:'!<command_you_want_to_search>',
        optionDescription:"If you don't remember full name of the command , type some words (must be relative)"
      }
    ],
    count: 0,
    total: 0
  },
  {
    id: 6,
    command: "useradd",
    title: "useradd - create a new user or update default new user information",
    
    info:
      ` useradd command in linux is used to add a new user in the system. In other words, it creates a new login account for a different user. But, only the root user can user useradd command in linux.

      By default, a group will also be created for the new user.`,
    options:[
      {
        option:'-c',
        optionDescription:` useradd Steve -c "Steve Smith"
        Any text string. It is generally a short description of the login`
      },
      {
        option:'-d',
        optionDescription:`useradd David -d "/home/DW"
        option creates a home directory with a name and path of your choice. By default the home directory is created in /home directory with the same name as the user’s name.`
      },
      {
        option:'-e',
        optionDescription:`The date on which the user account will be disabled. The date is
        specified in the format YYYY-MM-DD.`
      },
      {
        option:'-G',
        optionDescription:`
        Add user as suplimentry group
        useradd User3 -G User1		=> User1 is suplimentry group of User3
        -check : nano /etc/group
        `
      },
      {
        option:'-g',
        optionDescription:`useradd David -g 1008 => Assign a GID of choice -check : nano /etc/group`
      },
      {
        option:'-p',
        optionDescription:`The encrypted password, as returned by crypt(3). The default is to
        disable the password.`
      }
      
    ]
  },
  {
    id: 7,
    command: "cat",
    title: "cat - concatenate files and print on the standard output",
    img: "img/tesla_car_7.png",
    price: 85000,
    
    info:
      "Concatenate FILE(s), or standard input, to standard output",
    options:[
      {
        option:'-A',
        optionDescription:"show all"
      }
    ]
  },
  {
    id: 8,
    command: "date",
    title: `"date +"%D %T %A" -d tomorrow"`,
    img: "img/tesla_car_8.png",  
    info:
      "Display the current time in the given FORMAT, or set the system date Mandatory arguments to long options are mandatory for short options too.",
    options:[
      {
        option:'-d',
        optionDescription:"--date=STRING, eg :date -d 'yesterday'"
      },
      {
        option:'%a',
        optionDescription:"locale's abbreviated weekday name (e.g., Sun)"
      },
      {
        option:'%A',
        optionDescription:"locale's full weekday name (e.g., Sunday)"
      },
      {
        option:'%b',
        optionDescription:"locale's abbreviated month name (e.g., Jan)"
      },
      {
        option:'%B',
        optionDescription:"locale's full month name (e.g., January)"
      },
      {
        option:'%c',
        optionDescription:"locale's date and time (e.g., Thu Mar  3 23:05:25 2005)"
      },
      {
        option:'%C',
        optionDescription:"century; like %Y, except omit last two digits (e.g., 20)"
      },
      {
        option:'-d',
        optionDescription:"day of month (e.g., 01)"
      },
      {
        option:'%D',
        optionDescription:"date; same as %m/%d/%y"
      },
      {
        option:'%e',
        optionDescription:"day of month, space padded; same as %d"
      },
      {
        option:'%E',
        optionDescription:" full date; same as %Y-%m-%d"
      },
      {
        option:'-m',
        optionDescription:" Month"
      },
      {
        option:'%M',
        optionDescription:""
      }
      
    ]
  },
  {
    id: 9,
    command: "ls",
    title: "Format output : numberoflinks| username | groupname | file size | date | time | name",    
    info:
      "List information about the FILEs (the current directory by default).  Sort entries alphabetically",
    options:[
      {
        option:'-a',
        optionDescription:"do not ignore entries starting with ."
      },
      {
        option:'-c',
        optionDescription:`sort  by, and show, ctime (time of last modification of
          file status information); with -l: show ctime  and  sort  by  name;
          otherwise: sort by ctime, newest first`
      },
      {
        option:'-d',
        optionDescription:"List directories themselves, not their contents."
      },
      {
        option:'-D',
        optionDescription:"generate output designed for Emacs' dired mode"
      },
      {
        option:'-i',
        optionDescription:`print index number of the file`
      },
      {
        option:'-r',
        optionDescription:`Reverse order while sorting`
      },
      {
        option:'-R',
        optionDescription:`List subdirectories recursively `
      },
      {
        option:'-s',
        optionDescription:`generate output designed for Emacs' dired mode`
      },
      {
        option:'-S',
        optionDescription:`sort by file size`
      },
      {
        option:'-l',
        optionDescription:`Long listing format`
      },
      {
        option:'-L',
        optionDescription:`Information for symoblic links`
      },
      {
        option:'-t',
        optionDescription:`sort by modification time, newest first`
      },
      {
        option:'-u',
        optionDescription:`with -lt: sort by, and show, access time; with -l: show access time and sort by name; otherwise: sort by access time`
      },
    ]
  },
  {
    id: 10,
    command: "rm",
    title: "To delete file or directory",    
    info:
      `This  manual page documents the GNU version of rm.  rm removes each specified file.  By default, it does not remove directories.`,
    options:[
      {
        option:'-f',
        optionDescription:"ignore nonexistent files and arguments, never prompt"
      },
      {
        option:'-i',
        optionDescription:" prompt before every removal"
      },
      {
        option:'-r',
        optionDescription:"All clear , remove everything"
      },
      {
        option:'-d',
        optionDescription:"Remove empty directories"
      },
      {
        option:'-I',
        optionDescription:`prompt once before removing more than three files, or when removing recursively;  less intrusive than -i, while still giving protection against most mistakes`
      },
    ]
  },
  {
    id: 11,
    command: "mkdir",
    title: "Make new directories",    
    info:
      "Create the DIRECTORY(ies), if they do not already exist.",
    options:[
      {
        option:'-p',
        optionDescription:"Create directories recursively, 'mkdir -p D1/D2/D3' : it will create D3 inside D2 and D2 inside D1"
      }
    ]
  },
  {
    id: 12,
    command: "rmdir",
    title: "To remove empty directories",
    info:
      "Remove the DIRECTORY(ies), if they are empty.",
    options:[
      {
        option:'-p',
        optionDescription:`remove DIRECTORY and its ancestors; e.g., 'rmdir -p a/b/c' is similar to 'rmdir a/b/c a/b a'`
      }
    ]
  },
  {
    id: 13,
    command: "cp",
    title: "copy the files/directories one place to another",    
    info:
      "cp f1.c D1  or cp <f1.c ,f2.c , f3.c> D1  : It will change the timestamp",
    options:[
      {
        option:'-l',
        optionDescription:"hard link files instead of copying"
      },
      {
        option:'-p',
        optionDescription:"copy without changing the timestamp"
      },
    ]
  },
  {
    id: 14,
    command: "passwd",
    title: "passwd - update user's authentication tokens",
    info:
      "Concatenate FILE(s), or standard input, to standard output",
    options:[
      {
        option:'-k : keep',
        optionDescription:`The  option  -k  is used to indicate that the update should only before expired authentication tokens (passwords);`
      },
      {
        option:'-l : lock',
        optionDescription: `This  option  is used to lock the password of specified account andit is available to root only. The locking is performed by renderingthe  encrypted  password  into  an invalid string (by prefixing theencrypted string with an !).`
      },
      {
        option:'-u : Unlock',
        optionDescription:`This is the reverse of the -l option - it will unlock  the  account password by removing the ! prefix.`
      },
      {
        option:`-d : delete`,
        optionDescription:`This is a quick way to delete a password for an  account.  It  will set the named account passwordless. Available to root only.`
      },
      {
        option:`-e : expire`,
        optionDescription:`expire a password for an account. The user will be forced  to  change  the  password  during  the  next  login attempt.`
      },
      {
        option:'-f : force',
        optionDescription:`force to do some operation`
      },
      {
        option:`-n : Minimum`,
        optionDescription:`This will set the minimum password lifetime, in days, if the user's account supports password lifetimes.`
      },
      {
        option:`-x : maximum`,
        optionDescription:`This will set the maximum password lifetime, in days, if the user's account supports password lifetimes.`
      },
      {
        option:`-w : warning`,
        optionDescription:` This  will  set  the  number of days in advance the user will begin receiving warnings that her password will  expire,`
      },
      {
        option:`-i : inactive`,
        optionDescription:`Inactive a password ,if it has expired`
      },
      {
        option:`-S : Status`,
        optionDescription:`Show some information about user's password ,has 7 fields`
      },
    ]
  },
  {
    id: 15,
    command: "head",
    title: "Output the first part of files",    
    info:
      "Print  the first 10 lines of each FILE to standard output.",
    options:[
      {
        option:'-c',
        optionDescription:`print  the  first K bytes of each file; with the leading '-', print all but the last K bytes of each file`
      },
      {
        option:"-n : eg 'head -n 5 ' ",
        optionDescription:`print the first K lines instead of the first 10; with  the  leading '-', print all but the last K lines of each file`
      },
    ]
  },
  {
    id: 16,
    command: "tail",
    title: "output the last part of files",    
    info:
      `Print  the  last 10 lines of each FILE to standard output.  With more than one FILE, precede each with a header giving the file name.`,
    options:[
      {
        option:'-c',
        optionDescription:`output the last K bytes; or use -c +K to output bytes starting with the Kth of each file`
      },
      {
        option:"-n : eg 'tail -n 5 ' ",
        optionDescription:`output the last K lines, instead of the last 10; or use  -n  +K  to output starting with the Kth`
      },
    ]
  },
  {
    id: 17,
    command: "stat",
    title: "Display file or file system status. ",    
    info:
      `output the last part of filesstat - display file or file system status`,
    options:[
      {
        option:"-t",
        optionDescription:`print the information in terse form`
      },
    ]
  },
  {
    id: 18,
    command: "touch",
    title: "touch - change file timestamps : (Can be used to create new file)",    
    info:
      `Update the access and modification times of each FILE to the current time.`,
    options:[
      {
        option:'-a',
        optionDescription:`Change only access time`
      },
      {
        option:"-c ",
        optionDescription:`do not create any files`
      },
      {
        option:"-m ",
        optionDescription:`Change only the modification time`
      },
      {
        option:"-t ",
        optionDescription:`use [[CC]YY]MMDDhhmm[.ss] instead of current time`
      },
    ]
  }
];