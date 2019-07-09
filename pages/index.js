import { Layout } from 'antd';
import style from '../assets/main.less';

export default (props) => {
  return (
    <Layout>
      <Layout.Content>
        <p className={style.test}>This is a test app</p>
      </Layout.Content>
    </Layout>)
}