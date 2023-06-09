import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Searching..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort()})}
                defaultValue="Sort by"
                options={[
                    /* Опции сортировки по заголовку и телу */
                    {value: 'title', name: 'Name'},
                    {value: 'body', name: 'Details'}
                ]}
            />
        </div>
    );
};

export default PostFilter;
