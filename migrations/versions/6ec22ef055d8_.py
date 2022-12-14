"""empty message

Revision ID: 6ec22ef055d8
Revises: 
Create Date: 2022-08-21 17:50:32.041821

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6ec22ef055d8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('property',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('address', sa.String(length=1000), nullable=True),
    sa.Column('phone_number', sa.String(length=25), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('address'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('phone_number')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_system_admin', sa.Boolean(), nullable=True),
    sa.Column('is_property_admin', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('workorder',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=250), nullable=False),
    sa.Column('category', sa.String(length=120), nullable=False),
    sa.Column('access_notes', sa.String(length=100), nullable=True),
    sa.Column('entry_allowed', sa.Boolean(), nullable=False),
    sa.Column('bill_to_customer', sa.Boolean(), nullable=False),
    sa.Column('maintenance_notes', sa.String(length=1000), nullable=True),
    sa.Column('status', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_property',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('property_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['property_id'], ['property.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    op.create_table('user_workorder',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('workorder_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['workorder_id'], ['workorder.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_workorder')
    op.drop_table('user_property')
    op.drop_table('workorder')
    op.drop_table('user')
    op.drop_table('property')
    # ### end Alembic commands ###
