export const canAccessModule = (module, auth) => {

    const roles = fetchLabels(auth)
    const moduleRoles = fetchLabels(module)

    return moduleRoles.some(el => roles.includes(el))
}

export const canAccessPage = (module, auth) => {
    // const depts = fetchDeptLabels(auth)
    const department = auth.department.label
    const moduleDepts = fetchDeptLabels(module)

    return moduleDepts.includes(department)

    // return moduleDepts.some(el => depts.includes(el))
}

const fetchDeptLabels = entity => {
    let depts = []

    if (entity && entity.departments) {
        entity.departments.forEach(el => {
            depts.push(el.label)
        })
    }
    return depts
}


const fetchLabels = entity => {
    let enty = []

    entity.roles.forEach(el => {
        enty.push(el.label)
    })

    return enty
}