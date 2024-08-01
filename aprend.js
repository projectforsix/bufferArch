const fs = require("fs");
const path = require("path");

class openArch {
    constructor(open, write, read, error) {
        this.error = "[!] error!"
        this.open = fs.mkdir(path.join(__dirname, '/Hacked'), (error) => {
            if (error) {
                console.log(this.error);
            }
            console.log("[+] past created...")
        });
        this.write = fs.writeFile(path.join(__dirname, '/Hacked', 'hacked.txt'), 'hello, friend.', (error) => {
            if (error){
                console.log(this.error);
            }
            console.log("[+] archive created...")
        });
        this.read = fs.readFile(path.join(__dirname, '/Hacked', 'hacked.txt'), 'utf8', (error, data) => {
            if (error) {
                console.log(this.error);
            }
            console.log("[+] past archive created...")
        });
    };
    openArchives () {
        while (this.read === true) {
            console.log(this.read)
        }
};
}

const openarch = new openArch();
openarch.openArchives(this.read);