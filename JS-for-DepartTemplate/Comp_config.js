const CompanyConfig = ()=>{
    OrgChart.templates.company = Object.assign({}, OrgChart.templates.olivia);
    OrgChart.templates.company.size = [200, 200];
    OrgChart.templates.company.node =
        '<circle cx="100" cy="100" r="100" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></circle>' +
        '<g transform="matrix(3.5,0,0,3.5,20,20)"><circle cx="12" cy="22" r="12" fill="#039BE5"></circle>' +
        '<circle cx="33" cy="14" r="10" fill="#FFCA28"></circle>' +
        '<circle cx="30" cy="32" r="8" fill="#F57C00"></circle></g>';
    OrgChart.templates.company.ripple = {
        radius: 100,
        color: "#039BE5",
        rect: null
    };
    OrgChart.templates.department = Object.assign({}, OrgChart.templates.olivia);
    OrgChart.templates.department.size = [330, 120];
    OrgChart.templates.department.node =
        '<rect x="-2" y="-2" width="330" height="120" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
    OrgChart.templates.department.field_0 =
        '<text width="145" class="field_0" style="font-size: 20px;" fill="#757575" x="100" y="35">{val}</text>';
    OrgChart.templates.department.field_1 =
        '<text width="145" class="field_1" style="font-size: 14px;" fill="#757575" x="100" y="65">{val}</text>'
    OrgChart.templates.department.field_2 =
        '<text width="145" class="field_2" style="font-size: 14px;" fill="#757575" x="100" y="86">{val}</text>'
    OrgChart.templates.department.ripple = {
        radius: 0,
        color: "#F57C00",
        rect: null
    };
}