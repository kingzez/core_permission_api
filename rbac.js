let roles = {
    manager: {
        can: ['publish'],
        inherits: ['writer']
    },
    writer: {
        can: ['write'],
        inherits: ['guest']
    },
    guest: {
        can: ['read']
    }
}
// just function
function can(role, operation) {
    // Check if role exists
    if(!this.roles[role]) {
        return false;
    }
    let $role = this.roles[role];
    // Check if this role has access
    if($role.can.indexOf(operation) !== -1) {
        return true;
    }
    // Check if there are any parents
    if(!$role.inherits || $role.inherits.length < 1) {
        return false;
    }

    // Check child roles until one returns true or all return false
    return $role.inherits.some(childRole => this.can(childRole, operation));
}

class RBAC {
    constructor(roles) {
        if (typeof roles !== 'object') {
            throw TypeError('Expected type is object')
        }

        this.roles = roles
    }

    can(role, operation) {
        // Check if role exists
        if(!this.roles[role]) {
            return false;
        }
        let $role = this.roles[role];
        // Check if this role has access
        if($role.can.indexOf(operation) !== -1) {
            return true;
        }
        // Check if there are any parents
        if(!$role.inherits || $role.inherits.length < 1) {
            return false;
        }

        // Check child roles until one returns true or all return false
        return $role.inherits.some(childRole => {
            console.log($role.can)
            return this.can(childRole, operation)
        });
    }

}


let rb = new RBAC(roles)

result = rb.can('manager', 'read')



// module.exports = RBAC

console.log('result: ', result)
