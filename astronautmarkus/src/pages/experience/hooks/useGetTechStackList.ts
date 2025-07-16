import angularIcon from "../../../assets/icons/angular.png";
import reactIcon from "../../../assets/icons/react.webp";
import bootstrapIcon from "../../../assets/icons/bootstrap.png";
import bulmaIcon from "../../../assets/icons/bulma.png";
import cssIcon from "../../../assets/icons/css.png";
import htmlIcon from "../../../assets/icons/html.png";
import javascriptIcon from "../../../assets/icons/javascript.png";
import typescriptIcon from "../../../assets/icons/typescript.png";
import ionicIcon from "../../../assets/icons/ionic.webp";
import viteIcon from "../../../assets/icons/vite.svg";
import nodejsIcon from "../../../assets/icons/nodejs.png";
import pythonIcon from "../../../assets/icons/python.png";
import flaskIcon from "../../../assets/icons/flask.png";
import djangoIcon from "../../../assets/icons/django.png";
import laravelIcon from "../../../assets/icons/laravel.png";
import phpIcon from "../../../assets/icons/php.png";
import dockerIcon from "../../../assets/icons/docker.png";
import systemdIcon from "../../../assets/icons/systemd.png";
import gitIcon from "../../../assets/icons/git.png";
import githubIcon from "../../../assets/icons/github.png";
import githubActionsIcon from "../../../assets/icons/github-actions.png";
import dotenvIcon from "../../../assets/icons/dotenv.png";
import vscodeIcon from "../../../assets/icons/vscode.png";
import postmanIcon from "../../../assets/icons/postman.webp";
import requestsIcon from "../../../assets/icons/requests.png";
import electronIcon from "../../../assets/icons/electron.svg";
import firebaseIcon from "../../../assets/icons/firebase.png";
import arduinoIcon from "../../../assets/icons/arduino.svg";
import linuxIcon from "../../../assets/icons/linux.png";
import archIcon from "../../../assets/icons/arch.png";
import debianIcon from "../../../assets/icons/debian.png";
import manjaroIcon from "../../../assets/icons/manjaro.png";
import javaIcon from "../../../assets/icons/java.png";
import cassandraIcon from "../../../assets/icons/cassandra.png";
import mariadbIcon from "../../../assets/icons/mariadb.png";
import mongodbIcon from "../../../assets/icons/mongodb.svg";
import mysqlIcon from "../../../assets/icons/mysql.png";
import oracleSqlIcon from "../../../assets/icons/oracle-sql.png";
import sqliteIcon from "../../../assets/icons/sqlite.png";
import Fortinet from "../../../assets/icons/fortinet.png";
import Fedora from "../../../assets/icons/fedora.png";
import OracleLinux from "../../../assets/icons/oracle-linux.png";
import AlmaLinux from "../../../assets/icons/almalinux.png";
import EndeavourOS from "../../../assets/icons/endeavouros.png";
import Ubuntu from "../../../assets/icons/ubuntu.png";
import RaspberryPI from "../../../assets/icons/raspberry.png";
import Nginx from "../../../assets/icons/nginx.webp";
import Apache from "../../../assets/icons/apache.png";
import Bash from "../../../assets/icons/bash.png";
import Vue from "../../../assets/icons/vue.png";
import TailwindCSS from "../../../assets/icons/tailwindcss.png";
import RefineDev from "../../../assets/icons/refinedev.png";

export type TechStackCategory =
  | "Frontend"
  | "Backend"
  | "IoT"
  | "DevOps"
  | "Database"
  | "Tools"
  | "Sistemas Operativos"
  | "Sysadmin - Servidores";

export interface TechStackItem {
  name: string;
  icon: string;
  category: TechStackCategory;
}

export function useGetTechStackList() {
  const techStack: TechStackItem[] = [
    { name: "React", icon: reactIcon, category: "Frontend" },
    { name: "Vue", icon: Vue, category: "Frontend" },
    { name: "Angular", icon: angularIcon, category: "Frontend" },
    { name: "Tailwind CSS", icon: TailwindCSS, category: "Frontend" },
    { name: "Bootstrap", icon: bootstrapIcon, category: "Frontend" },
    { name: "Bulma", icon: bulmaIcon, category: "Frontend" },
    { name: "CSS", icon: cssIcon, category: "Frontend" },
    { name: "HTML", icon: htmlIcon, category: "Frontend" },
    { name: "Javascript", icon: javascriptIcon, category: "Frontend" },
    { name: "Typescript", icon: typescriptIcon, category: "Frontend" },
    { name: "Ionic", icon: ionicIcon, category: "Frontend" },
    { name: "Vite", icon: viteIcon, category: "Frontend" },
    { name: "Node.js", icon: nodejsIcon, category: "Backend" },
    { name: "Python", icon: pythonIcon, category: "Backend" },
    { name: "Flask", icon: flaskIcon, category: "Backend" },
    { name: "Django", icon: djangoIcon, category: "Backend" },
    { name: "Laravel", icon: laravelIcon, category: "Backend" },
    { name: "PHP", icon: phpIcon, category: "Backend" },
    { name: "Docker", icon: dockerIcon, category: "DevOps" },
    { name: "Systemd", icon: systemdIcon, category: "Sysadmin - Servidores" },
    { name: "Git", icon: gitIcon, category: "DevOps" },
    { name: "Github", icon: githubIcon, category: "DevOps" },
    { name: "Github Actions", icon: githubActionsIcon, category: "DevOps" },
    { name: "Dotenv", icon: dotenvIcon, category: "DevOps" },
    { name: "Vscode", icon: vscodeIcon, category: "Tools" },
    { name: "Postman", icon: postmanIcon, category: "Tools" },
    { name: "Requests", icon: requestsIcon, category: "Tools" },
    { name: "Electron", icon: electronIcon, category: "Tools" },
    { name: "Firebase", icon: firebaseIcon, category: "Tools" },
    { name: "Arduino", icon: arduinoIcon, category: "IoT" },
    { name: "Linux", icon: linuxIcon, category: "Sistemas Operativos" },
    { name: "Arch Linux", icon: archIcon, category: "Sistemas Operativos" },
    { name: "Debian", icon: debianIcon, category: "Sistemas Operativos" },
    { name: "Manjaro", icon: manjaroIcon, category: "Sistemas Operativos" },
    { name: "Java", icon: javaIcon, category: "Backend" },
    { name: "Cassandra", icon: cassandraIcon, category: "Database" },
    { name: "Mariadb", icon: mariadbIcon, category: "Database" },
    { name: "Mongodb", icon: mongodbIcon, category: "Database" },
    { name: "Mysql", icon: mysqlIcon, category: "Database" },
    { name: "Oracle SQL", icon: oracleSqlIcon, category: "Database" },
    { name: "Sqlite", icon: sqliteIcon, category: "Database" },
    { name: "Fortinet", icon: Fortinet, category: "Sysadmin - Servidores" },
    { name: "Fedora", icon: Fedora, category: "Sistemas Operativos" },
    { name: "Oracle Linux", icon: OracleLinux, category: "Sysadmin - Servidores" },
    { name: "AlmaLinux", icon: AlmaLinux, category: "Sysadmin - Servidores" },
    { name: "EndeavourOS", icon: EndeavourOS, category: "Sistemas Operativos" },
    { name: "Ubuntu", icon: Ubuntu, category: "Sistemas Operativos" },
    { name: "Raspberry Pi", icon: RaspberryPI, category: "IoT" },
    { name: "Nginx", icon: Nginx, category: "Sysadmin - Servidores" },
    { name: "Apache", icon: Apache, category: "Sysadmin - Servidores" },
    { name: "Bash", icon: Bash, category: "Sysadmin - Servidores" },
    { name: "Refine Dev", icon: RefineDev, category: "Tools" },
  ];

  const grouped: Record<TechStackCategory, TechStackItem[]> = {
    Frontend: [],
    Backend: [],
    IoT: [],
    DevOps: [],
    Database: [],
    Tools: [],
    "Sistemas Operativos": [],
    "Sysadmin - Servidores": [],
  };
  techStack.forEach(item => grouped[item.category].push(item));

  return grouped;
}
