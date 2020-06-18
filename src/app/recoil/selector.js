import {selector} from 'recoil'
import {listTodoState} from './atom'

export const newListState = selector({	// newListState này sẽ chứa danh sách các action có trạng thái là new.
  key: 'newList',
  get: ({ get }) => {
    const list = get(listTodoState);	// đây là cách để lấy cả list todo đã tạo với atom ở bước trên.
    return list.filter((item) => item.status === 'new');	// chọn và trả về những thằng có status là new.
  }
});

export const inprogressListState = selector({	// inprogressListState này sẽ chứa danh sách các action có trạng thái là inprogress.
  key: 'inprogressList',
  get: ({ get }) => {
    const list = get(listTodoState);
    return list.filter((item) => item.status === 'inprogress');
  }
});

export const completedListState = selector({	// completedListState này sẽ chứa danh sách các action có trạng thái là completed.
  key: 'completedList',
  get: ({ get }) => {
    const list = get(listTodoState);
    return list.filter((item) => item.status === 'completed');
  }
});