/* eslint-disable */
export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        getTask () {
            return task
        }
    }
}

const task = {"business": {"cc_company": "", "cc_id": 2, "cc_name": "蓝鲸", "cc_owner": "", "executor": "", "id": 1, "life_cycle": "2", "resource_uri": "/o/bk_sops/api/v3/business/2/", "time_zone": "Asia/Shanghai"}, "category": "OpsTools", "category_name": "运维工具", "create_info": "0", "create_method": "app", "create_time": "2019-04-12 11:34:50 +0800", "creator_name": "zhuyonghua", "current_flow": "execute_task", "elapsed_time": 10188, "executor_name": "zhuyonghua", "finish_time": null, "flow_type": "common", "id": 1087, "instance_id": 1087, "is_deleted": false, "is_finished": false, "is_started": true, "name": "移动端测试模板(勿删)_20190412113154", "pipeline_instance": "", "pipeline_tree": "{\"activities\":{\"node476538b7007731edbd3ae7937bbc\":{\"outgoing\":\"line8f4675c876be371f87b155e747fc\",\"incoming\":\"linecfdc995ec0cd36f1bff92b5a0ecc\",\"name\":\"\\u6682\\u505c\",\"error_ignorable\":false,\"component\":{\"code\":\"pause_node\",\"data\":{}},\"stage_name\":\"\\u6b65\\u9aa41\",\"optional\":false,\"type\":\"ServiceActivity\",\"id\":\"node476538b7007731edbd3ae7937bbc\",\"loop\":{}}},\"end_event\":{\"incoming\":\"line8f4675c876be371f87b155e747fc\",\"outgoing\":\"\",\"type\":\"EmptyEndEvent\",\"id\":\"nodec5b927cec3c635d790eeae49ca96\",\"name\":\"\"},\"outputs\":[],\"flows\":{\"line8f4675c876be371f87b155e747fc\":{\"is_default\":false,\"source\":\"node476538b7007731edbd3ae7937bbc\",\"id\":\"line8f4675c876be371f87b155e747fc\",\"target\":\"nodec5b927cec3c635d790eeae49ca96\"},\"linecfdc995ec0cd36f1bff92b5a0ecc\":{\"is_default\":false,\"source\":\"nodefc33aebbbae7349192e9dbdd091e\",\"id\":\"linecfdc995ec0cd36f1bff92b5a0ecc\",\"target\":\"node476538b7007731edbd3ae7937bbc\"}},\"id\":\"nodef89b572e7ff536a995b789b13a8a\",\"gateways\":{},\"line\":[{\"source\":{\"id\":\"nodefc33aebbbae7349192e9dbdd091e\",\"arrow\":\"Right\"},\"id\":\"linecfdc995ec0cd36f1bff92b5a0ecc\",\"target\":{\"id\":\"node476538b7007731edbd3ae7937bbc\",\"arrow\":\"Left\"}},{\"source\":{\"id\":\"node476538b7007731edbd3ae7937bbc\",\"arrow\":\"Right\"},\"id\":\"line8f4675c876be371f87b155e747fc\",\"target\":{\"id\":\"nodec5b927cec3c635d790eeae49ca96\",\"arrow\":\"Left\"}}],\"start_event\":{\"incoming\":\"\",\"outgoing\":\"linecfdc995ec0cd36f1bff92b5a0ecc\",\"type\":\"EmptyStartEvent\",\"id\":\"nodefc33aebbbae7349192e9dbdd091e\",\"name\":\"\"},\"constants\":{},\"location\":[{\"y\":150,\"x\":80,\"type\":\"startpoint\",\"id\":\"nodefc33aebbbae7349192e9dbdd091e\"},{\"y\":150,\"x\":600,\"type\":\"endpoint\",\"id\":\"nodec5b927cec3c635d790eeae49ca96\"},{\"stage_name\":\"\\u6b65\\u9aa41\",\"name\":\"\\u6682\\u505c\",\"y\":133,\"x\":300,\"type\":\"tasknode\",\"id\":\"node476538b7007731edbd3ae7937bbc\"}]}", "resource_uri": "/o/bk_sops/api/v3/taskflow/1087/", "start_time": "2019-04-12 11:34:52 +0800", "subprocess_info": {"details": [], "subproc_has_update": false}, "template_id": "82"}